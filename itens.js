// ============================================================
//  ITENS À VENDA — é AQUI que você atualiza o site.
//  Salvou e subiu de novo na Vercel? O site já muda sozinho.
//
//  COMO FAZER AS MUDANÇAS MAIS COMUNS
//  • Vendeu um item:   troque  status: "disponivel"  por  status: "vendido"
//                      (ele vai para o fim da lista, com carimbo de VENDIDO)
//  • Reservou:         status: "reservado"
//  • Mudou o preço:    edite o número em  preco
//  • Novo item:        copie um bloco { ... } inteiro, cole no fim da lista,
//                      troque os dados e ponha as fotos na pasta  images/
//  • Remover um item:  apague o bloco { ... } dele
//
//  DICAS
//  • Cada item termina com vírgula depois do  }
//  • Textos ficam entre aspas "assim". Para usar aspas dentro do texto, use \"
//  • Preço é só o número (500), sem R$ e sem ponto
//  • As medidas aparecem na ordem em que você escrever
// ============================================================

const SITE = {
  titulo: "Itens",
  destaque: "à venda",
  eyebrow: "Mudança",
  subtitulo: "Estamos de mudança e vendendo estes itens. Todas as medidas estão em centímetros.",

  // Número com DDI + DDD, só dígitos. Exemplo: "5519999999999"
  // Enquanto estiver vazio, o botão "Tenho interesse" não aparece.
  whatsapp: "",

  // Data da última atualização (ano-mês-dia). Aparece no rodapé.
  atualizadoEm: "2026-10-30",
};

const ITENS = [
  {
    nome: "Rack para TV",
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
    fotos: ["rack-1.jpg", "rack-2.jpg"],
  },

  {
    nome: "Cadeiras altas",
    quantidade: 2,
    status: "disponivel",
    preco: 120,
    precoObs: "cada",
    descricao: "Assento de couro marrom e base de metal preto. Medidas de cada uma.",
    medidas: {
      "Largura": "46,5 cm",
      "Profundidade": "50 cm",
      "Altura até o assento": "76 cm",
      "Altura até o encosto": "101,5 cm",
    },
    notas: [
      "O couro está descascando e precisa de reparo (veja as fotos).",
      "Modelos parecidos, novos, custam cerca de R$ 470 cada.",
    ],
    fotos: ["cadeiras-1.jpg", "cadeiras-2.jpg"],
  },

  {
    nome: "Mesas de cabeceira",
    quantidade: 2,
    status: "disponivel",
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
    nome: "Cabeceira estofada",
    status: "disponivel",
    preco: 250,
    descricao: "Duas peças em tecido azul. A largura é a do conjunto.",
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
    fotos: ["cabeceira-1.jpg", "cabeceira-2.jpg"],
  },
];
