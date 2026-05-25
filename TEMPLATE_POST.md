# TEMPLATE — Como criar um novo post

## 1. Copie o bloco abaixo e salve como um arquivo .md em:
## src/content/posts/SLUG-DO-POST.md
## (SLUG = título em minúsculas com hífens, sem acentos)

---

```
---
title: "Título do Post em Inglês"
meta_title: "Título SEO — The Orlando Guide"
description: "Descrição curta do post, máximo 160 caracteres, aparece no Google."
date: 2026-05-23T10:00:00Z
image: "URL_DA_IMAGEM"
categories: ["theme-parks-shopping"]
authors: ["the-orlando-guide"]
tags: ["disney", "orlando", "dica"]
draft: false
---

Texto do post começa aqui. Sem HTML — só escreva normalmente.

## Subtítulo grande

Parágrafo normal. Pode usar **negrito** e *itálico*.

### Subtítulo menor

- Item de lista
- Outro item
- Mais um

> Citação ou destaque em bloco

[Texto do link](https://wa.me/13214421907)
```

---

## 2. CATEGORIAS disponíveis (use exatamente assim):

| Categoria | Valor no arquivo |
|---|---|
| Parques e Compras | `"theme-parks-shopping"` |
| Planejamento | `"travel-planning"` |
| Hotéis e Transporte | `"hotels-transportation"` |
| Morar em Orlando | `"living-in-orlando"` |

---

## 3. IMAGENS — 3 opções:

### Opção A — Unsplash (grátis, mais fácil)
Acesse https://unsplash.com, busque "disney world" ou "orlando theme park",
clique na foto → botão de compartilhar → copie o link direto da imagem.
Use esse link no campo `image:` do frontmatter.

### Opção B — Imagem própria
Salve o arquivo em: public/images/posts/nome-da-imagem.jpg
Use no frontmatter: `image: "/images/posts/nome-da-imagem.jpg"`

### Opção C — Peça ao Claude Code
"Crie um post sobre X com uma imagem do Unsplash sobre Y"
Eu busco a imagem e crio o arquivo completo.

---

## 4. Publicar após criar o arquivo:

```bash
cd /Users/luizfreire/Command_center_Mac/TOG_project/tog-english-blog
git add .
git commit -m "feat: novo post - título aqui"
git push
```

Vercel publica em ~1 minuto automaticamente.

---

## 5. AUTOMAÇÃO VIA TELEGRAM (em breve)
Claude Code criará os posts automaticamente quando acionado via Telegram.
