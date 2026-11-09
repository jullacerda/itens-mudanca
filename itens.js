// ============================================================
//  ITENS À VENDA — é AQUI que você atualiza o site.
//  Salvou e subiu de novo na Vercel? O site já muda sozinho.
//
//  COMO FAZER AS MUDANÇAS MAIS COMUNS
//  • Vendeu um item:   troque  status: "disponivel"  por  status: "vendido"
//                      (ele vai para o fim da lista, com carimbo de VENDIDO)
//  • Reservou:         status: "reservado"
//  • Mudou o preço:    edite o número em  preco
//  • Ordem na página:  os itens mais recentes ficam no topo, pela data
//                      atualizadoEm de cada item (ano-mês-dia). Item novo ou
//                      alterado? Ponha a data de hoje nele. Vendidos vão
//                      sempre para o fim. Mesma data: o último da lista vem antes.
//  • Novo item:        copie um bloco { ... } inteiro, cole no fim da lista,
//                      troque os dados e ponha as fotos na pasta  images/
//  • Remover um item:  apague o bloco { ... } dele
//
//  DICAS
//  • Cada item termina com vírgula depois do  }
//  • Textos ficam entre aspas "assim". Para usar aspas dentro do texto, use \"
//  • Preço é só o número (500), sem R$ e sem ponto
//  • As medidas aparecem na ordem em que você escrever
//  • olx: "..." mostra o link "Ver anúncio na OLX" (opcional, pode apagar)
// ============================================================

const SITE = {
  titulo: "Itens",
  destaque: "à venda",
  eyebrow: "Mudança",
  subtitulo: "Estamos de mudança e vendendo estes itens. Todas as medidas estão em centímetros.",

  // Etiqueta escura no topo da página. Apague o texto para escondê-la.
  retirada: "Retirada em Campinas/SP",

  // Número com DDI + DDD, só dígitos. Exemplo: "5519999999999"
  // Enquanto estiver vazio, o botão "Tenho interesse" não aparece.
  whatsapp: "",

  // Data da última atualização (ano-mês-dia). Aparece no rodapé.
  atualizadoEm: "2026-11-09",
};

const ITENS = [
  {
    nome: "Rack para TV",
    atualizadoEm: "2026-10-30",
    status: "disponivel", // "disponivel" | "reservado" | "vendido"
    preco: 500,
    descricao: "Branco, com estrutura de madeira escura e duas gavetas.",
    medidas: {
      "Largura": "140 cm",
      "Altura": "50,5 cm",
      "Profundidade": "44 cm",
    },
    notas: ["Os objetos sobre o rack nas fotos não fazem parte da venda."],
    link: {
      texto: "Ver o modelo na Tok&Stok",
      url: "https://www.tokstok.com.br/rack-2-gavetas-1-40-m-x-46-cm-branco-nozes-win/p",
    },
    olx: "https://sp.olx.com.br/grande-campinas/moveis/racks-e-paineis/rack-para-tv-tok-stok-win-1-40-m-branco-e-nozes-com-2-gavetas-1549269633",
    fotos: ["rack-1.jpg", "rack-2.jpg"],
  },

  {
    nome: "Mesas de cabeceira",
    atualizadoEm: "2026-10-30",
    quantidade: 2,
    status: "reservado",
    preco: 100,
    precoObs: "cada · as duas por R$ 200",
    descricao: "Madeira clara com frente ripada, uma porta e duas prateleiras internas. Medidas de cada uma.",
    medidas: {
      "Largura": "35,3 cm",
      "Altura": "65 cm",
      "Profundidade": "31,5 cm",
    },
    fotos: ["mesas-1.jpg"],
  },

  {
    nome: "Cabeceira queen estofada",
    atualizadoEm: "2026-10-30",
    status: "disponivel",
    preco: 250,
    descricao: "Para cama tamanho queen. Duas peças em tecido azul. A largura é a do conjunto.",
    medidas: {
      "Largura": "159,5 cm",
      "Altura": "50 cm",
      "Espessura": "8,5 cm",
    },
    notas: ["Com 1 ano e meio de uso. Nova, custa cerca de R$ 550 (em outra cor)."],
    link: {
      texto: "Ver o modelo na Tok&Stok",
      url: "https://www.tokstok.com.br/cabeceira-casal-mescla-azul-escuro-muy/p",
    },
    olx: "https://sp.olx.com.br/grande-campinas/moveis/camas-e-colchoes/cabeceira-queen-estofada-tok-stok-muy-azul-1549270303",
    fotos: ["cabeceira-1.jpg", "cabeceira-2.jpg"],
  },

  {
    nome: "Bike Specialized Diverge A1",
    atualizadoEm: "2026-11-01",
    status: "disponivel",
    preco: 4300,
    descricao: "Bike de estrada (speed) de alumínio com freio a disco, boa para asfalto e cascalho leve. Quadro tamanho 49. Usada, em bom estado, com marcas normais de uso (veja as fotos).",
    medidas: {
      "Quadro": "Alumínio, tam. 49",
      "Garfo": "Carbono",
      "Grupo": "Shimano Claris, 16v",
      "Relação": "48/32 · 11-32",
      "Freios": "A disco (Tektro)",
      "Rodas": "Axis Sport Disc",
      "Pneus": "Continental Ultra Sport",
    },
    notas: ["Acompanha pedais Shimano SPD (de clip)."],
    olx: "https://sp.olx.com.br/grande-campinas/ciclismo/bike-specialized-diverge-a1-freio-a-disco-claris-16v-tam-49-1549268809",
    fotos: [
      "bike-specialized-1.jpg", "bike-specialized-2.jpg", "bike-specialized-3.jpg",
      "bike-specialized-4.jpg", "bike-specialized-5.jpg",
    ],
  },

  {
    nome: "Bike speed Cannondale CAAD Optimo 4",
    atualizadoEm: "2026-11-01",
    status: "disponivel",
    preco: 4700,
    descricao: "Bike de estrada (speed) 2021, com menos de 2.000 km rodados, em excelente estado e com todos os componentes originais. Quadro tamanho 58.",
    medidas: {
      "Quadro": "Alumínio, tam. 58",
      "Garfo": "Carbono",
      "Grupo": "Shimano Claris, 16v",
      "Relação": "50/34 · 11-30",
      "Freios": "Promax",
      "Rodas": "Cannondale RS 3.0",
      "Pneus": "Schwalbe One",
    },
    notas: ["Acompanha pedais Shimano SPD (de clip) e porta-garrafa."],
    olx: "https://sp.olx.com.br/grande-campinas/ciclismo/bicicleta-speed-cannondale-caad-optimo-4-claris-16v-tam-58-pouco-uso-1549267893",
    fotos: [
      "bike-cannondale-1.jpg", "bike-cannondale-2.jpg", "bike-cannondale-3.jpg",
      "bike-cannondale-4.jpg", "bike-cannondale-5.jpg",
    ],
  },

  {
    nome: "iMac 21,5 pol. (Late 2013) para conserto",
    atualizadoEm: "2026-11-01",
    status: "disponivel",
    preco: 700,
    descricao: "Vendido para conserto ou para aproveitar as peças: a tela está quebrada e ele não tem HD. Placa-mãe, processador, memória, fonte e estrutura estão preservados. Serve para trocar o display e instalar um SSD.",
    medidas: {
      "Modelo": "A1418 (EMC 2742)",
      "Processador": "Intel Core i5 2,9 GHz",
      "Portas": "4 USB 3.0 · 2 Thunderbolt",
      "Sem fio": "Wi-Fi e Bluetooth",
    },
    notas: ["Tela quebrada e sem HD: vendido no estado.", "Acompanha cabo de força."],
    olx: "https://sp.olx.com.br/grande-campinas/informatica/computadores-e-desktops/imac-21-5-pol-late-2013-a1418-para-conserto-1498316231",
    fotos: ["imac-1.jpg", "imac-2.jpg", "imac-3.jpg"],
  },

  {
    nome: "Churrasqueira de mesa sem fumaça",
    atualizadoEm: "2026-11-01",
    status: "disponivel",
    preco: 250,
    descricao: "Table Grill original, vermelha, em ótimo estado de funcionamento. Usa carvão e tem ventilação interna que acende rápido e solta pouca fumaça. Boa para apartamento, varanda ou área gourmet.",
    medidas: {
      "Combustível": "Carvão",
      "Voltagem": "Bivolt",
    },
    notas: [
      "A parte externa não esquenta, e ela é compacta e fácil de transportar.",
      "Acompanha grelha, cesto central para o carvão e aro de proteção.",
      "Marcas naturais de uso na parte de dentro.",
    ],
    olx: "https://sp.olx.com.br/grande-campinas/eletro/fogoes-e-fornos/churrasqueira-sem-fumaca-table-grill-1498310895",
    fotos: [
      "churrasqueira-1.jpg", "churrasqueira-2.jpg", "churrasqueira-3.jpg",
      "churrasqueira-4.jpg", "churrasqueira-5.jpg",
    ],
  },

  {
    nome: "Micro-ondas Brastemp Ative! 30 L",
    atualizadoEm: "2026-11-09",
    status: "disponivel",
    preco: 200,
    descricao: "Branco, com prato giratório e painel digital com teclas de preparo rápido: receitas prontas (carne moída, macarrão, arroz, peixe, legumes, suflê, pipoca e brigadeiro), descongelar (carne bovina, frango e prato pronto), adiar preparo e +30 seg, +1 min e +5 min.",
    medidas: {
      "Modelo": "BMS45B (Ative!)",
      "Capacidade": "30 L",
      "Potência": "820 W",
      "Voltagem": "110 V",
      "Largura": "53,9 cm",
      "Altura": "30 cm",
      "Profundidade": "42 cm",
    },
    notas: [
      "Funciona perfeitamente. Tem cerca de 10 anos de uso.",
      "Um modelo parecido da Brastemp, novo, custa cerca de R$ 730.",
    ],
    olx: "https://www.olx.com.br/vi/1551419382",
    fotos: ["microondas-1.jpg"],
  },
];
