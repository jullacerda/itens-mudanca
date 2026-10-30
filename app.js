// Monta a página a partir de itens.js. Você não precisa mexer aqui.
(function () {
  "use strict";

  var BRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
  var ORDEM = { disponivel: 0, reservado: 1, vendido: 2 };

  var site = typeof SITE !== "undefined" ? SITE : {};
  var lista = typeof ITENS !== "undefined" ? ITENS : [];

  // ---------- helpers ----------

  function el(tag, props) {
    var n = document.createElement(tag);
    var p = props || {};
    Object.keys(p).forEach(function (k) {
      var v = p[k];
      if (v === null || v === undefined || v === false) return;
      if (k === "text") n.textContent = v;
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? "" : v);
    });
    for (var i = 2; i < arguments.length; i++) {
      var kids = [].concat(arguments[i]);
      kids.forEach(function (c) { if (c !== null && c !== undefined && c !== false) n.append(c); });
    }
    return n;
  }

  function status(item) {
    return ORDEM[item.status] === undefined ? "disponivel" : item.status;
  }

  function foto(nome) { return "images/" + nome; }

  // evita quebrar "R$" de um lado e o valor do outro
  function nb(texto) { return String(texto).replace(/R\$ /g, "R$ "); }

  // ---------- foto ampliada ----------

  var lb = document.getElementById("lb");
  var lbImg = document.getElementById("lb-img");
  var lbCount = document.getElementById("lb-count");
  var lbPrev = document.getElementById("lb-prev");
  var lbNext = document.getElementById("lb-next");
  var lbList = [], lbIdx = 0, lbNome = "";

  function lbShow(i) {
    lbIdx = (i + lbList.length) % lbList.length;
    lbImg.src = lbList[lbIdx];
    lbImg.alt = lbNome + " — foto " + (lbIdx + 1) + " de " + lbList.length;
    var varias = lbList.length > 1;
    lbCount.textContent = varias ? (lbIdx + 1) + " / " + lbList.length : "";
    lbPrev.hidden = lbNext.hidden = !varias;
  }

  function lbOpen(list, i, nome) {
    lbList = list; lbNome = nome;
    lbShow(i);
    if (!lb.open) lb.showModal();
  }

  lbPrev.addEventListener("click", function () { lbShow(lbIdx - 1); });
  lbNext.addEventListener("click", function () { lbShow(lbIdx + 1); });
  document.getElementById("lb-close").addEventListener("click", function () { lb.close(); });
  lb.addEventListener("click", function (e) {
    if (e.target === lb || e.target.classList.contains("lb-inner")) lb.close();
  });
  lb.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") lbShow(lbIdx - 1);
    if (e.key === "ArrowRight") lbShow(lbIdx + 1);
  });

  // ---------- galeria de um item ----------

  function galeria(item, st, eager) {
    var fotos = item.fotos || [];
    if (!fotos.length) return [];
    var idx = 0;
    var bg = el("img", { class: "bg", alt: "", loading: eager ? "eager" : "lazy" });
    var fg = el("img", { class: "fg", loading: eager ? "eager" : "lazy" });
    var thumbs = [];

    function mostrar(i) {
      idx = i;
      bg.src = fg.src = foto(fotos[i]);
      fg.alt = item.nome + " — foto " + (i + 1) + " de " + fotos.length;
      thumbs.forEach(function (t, j) { t.setAttribute("aria-current", j === i ? "true" : "false"); });
    }

    var stage = el("button", {
      class: "stage", type: "button", "aria-label": "Ampliar foto de " + item.nome,
      onclick: function () { lbOpen(fotos.map(foto), idx, item.nome); }
    }, bg, fg,
      st === "reservado" && el("span", { class: "badge", text: "Reservado" }),
      st === "vendido" && el("span", { class: "stamp", text: "Vendido" })
    );

    var tira = null;
    if (fotos.length > 1) {
      thumbs = fotos.map(function (f, i) {
        return el("button", {
          class: "thumb", type: "button", "aria-label": "Ver foto " + (i + 1),
          onclick: function () { mostrar(i); }
        }, el("img", { src: foto(f), alt: "", loading: "lazy" }));
      });
      tira = el("div", { class: "thumbs" }, thumbs);
    }

    mostrar(0);
    return [stage, tira];
  }

  // ---------- botão de contato ----------

  function contato(item, st) {
    if (st === "vendido") return null;
    if (st === "reservado") return el("span", { class: "cta", "aria-disabled": "true", text: "Reservado" });
    var num = String(site.whatsapp || "").replace(/\D/g, "");
    if (!num) return null;
    var msg = "Oi! Tenho interesse em: " + item.nome;
    return el("a", {
      class: "cta", target: "_blank", rel: "noopener",
      href: "https://wa.me/" + num + "?text=" + encodeURIComponent(msg),
      text: "Tenho interesse"
    });
  }

  // ---------- cartão ----------

  function cartao(item, i) {
    var st = status(item);

    var titulo = el("div", null,
      el("h2", { text: item.nome }),
      item.quantidade > 1 && el("span", { class: "qty", text: item.quantidade + " unidades" })
    );

    var etiqueta = typeof item.preco === "number" && el("div", { class: "tag" },
      el("b", { text: BRL.format(item.preco) }),
      item.precoObs && el("small", { text: nb(item.precoObs) })
    );

    var medidas = item.medidas && Object.keys(item.medidas).length && el("dl", { class: "specs" },
      Object.keys(item.medidas).map(function (k) {
        return el("div", { class: "spec" },
          el("dt", { text: k }), el("span", { class: "dots", "aria-hidden": "true" }), el("dd", { text: item.medidas[k] }));
      })
    );

    var notas = item.notas && item.notas.length && el("ul", { class: "notes" },
      item.notas.map(function (t) { return el("li", { text: nb(t) }); })
    );

    var mais = item.link && item.link.url && el("p", { class: "more" },
      el("a", { href: item.link.url, target: "_blank", rel: "noopener", text: item.link.texto || "Ver mais" })
    );

    var info = el("div", { class: "info" },
      el("div", { class: "top" }, titulo, etiqueta),
      item.descricao && el("p", { class: "desc", text: nb(item.descricao) }),
      medidas, notas, mais, contato(item, st)
    );

    return el("article", { class: "card is-" + st, style: "--i:" + i }, galeria(item, st, i === 0), info);
  }

  // ---------- página ----------

  document.title = ((site.titulo || "Itens") + " " + (site.destaque || "à venda")).trim();

  document.getElementById("eyebrow").textContent = site.eyebrow || "";
  document.getElementById("eyebrow").hidden = !site.eyebrow;
  var h1 = document.getElementById("titulo");
  h1.textContent = (site.titulo || "Itens") + " ";
  h1.append(el("em", { text: site.destaque || "à venda" }));
  document.getElementById("lede").textContent = site.subtitulo || "";

  var itens = lista.map(function (it, i) { return { it: it, i: i }; })
    .sort(function (a, b) { return (ORDEM[status(a.it)] - ORDEM[status(b.it)]) || (a.i - b.i); })
    .map(function (x) { return x.it; });

  var livres = itens.filter(function (x) { return status(x) === "disponivel"; }).length;
  var reservados = itens.filter(function (x) { return status(x) === "reservado"; }).length;
  var contagem = document.getElementById("count");
  if (!itens.length) contagem.hidden = true;
  else if (!livres && !reservados) contagem.textContent = "Tudo vendido. Obrigado!";
  else contagem.textContent = livres + " de " + itens.length + " disponíveis" +
    (reservados ? " · " + reservados + (reservados > 1 ? " reservados" : " reservado") : "");

  var grade = document.getElementById("grid");
  itens.forEach(function (it, i) { grade.append(cartao(it, i)); });

  var rodape = document.getElementById("footer");
  var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(site.atualizadoEm || "");
  if (m) {
    var d = new Date(+m[1], +m[2] - 1, +m[3]);
    rodape.textContent = "Atualizado em " + d.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" }) + ".";
  } else rodape.hidden = true;
})();
