# Itens à venda

Site estático (sem build, sem dependências). Tudo que muda fica em **`itens.js`**.

## Atualizar

| Quero… | Faço… |
|---|---|
| Marcar como vendido | em `itens.js`, troque `status: "disponivel"` por `status: "vendido"` |
| Marcar como reservado | `status: "reservado"` |
| Mudar o preço | edite o número em `preco` |
| Adicionar um item | copie um bloco `{ ... }` inteiro, cole no fim da lista, troque os dados e coloque as fotos na pasta `images/` |
| Remover um item | apague o bloco `{ ... }` dele |
| Ligar o botão "Tenho interesse" | preencha `whatsapp` no topo de `itens.js` (ex.: `"5519999999999"`) |

Itens vendidos vão sozinhos para o fim da lista, com o carimbo VENDIDO, e o contador do topo se ajusta.

**Fotos:** use JPG com até uns 1400 px no lado maior (fica leve no celular). Escreva o nome do arquivo em `fotos: [...]`.

## Ver no computador

Dê dois cliques em `index.html`. Não precisa de servidor.

## Publicar na Vercel

**Pelo terminal** (na pasta do site):

```
npx vercel          # primeira vez: responde as perguntas, aceite os padrões
npx vercel --prod   # publica no endereço definitivo
```

**Pelo GitHub:** suba a pasta num repositório, importe na Vercel, escolha *Framework Preset: Other* e deixe *Build Command* e *Output Directory* vazios. Cada `git push` republica sozinho.

## Depois de publicar (uma vez só)

No `index.html`, troque `SEU-SITE.vercel.app` pelo endereço real. É isso que faz a **foto de prévia aparecer quando o link é colado no WhatsApp**. Publique de novo.

## Observações

- O site tem `noindex`: o Google não lista a página, só quem recebe o link chega nela. Para mudar isso, apague a linha `<meta name="robots" content="noindex">` do `index.html`.
- `images/capa.jpg` é só a imagem de prévia do link (1200×630).
