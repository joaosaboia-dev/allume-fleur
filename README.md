# Allume Fleur

> Delicadeza em cada chama — velas artesanais & presentes personalizados.

Site institucional + catálogo (loja) da **Allume Fleur**, marca de velas artesanais de Manaus, AM. Construído como site estático (HTML, CSS e JavaScript puro), sem dependências de build.

## ✨ Funcionalidades

- **Landing page** (`index.html`) — apresentação da marca, coleções e canais de contato.
- **Loja** (`loja.html`) — catálogo filtrável por coleção, carrinho com persistência em `localStorage` e finalização do pedido direto pelo **WhatsApp**.
- Design responsivo, animações com _scroll reveal_ e respeito a `prefers-reduced-motion`.
- Acessibilidade: navegação por teclado, `aria-*` e foco gerenciado nos drawers.

## 📁 Estrutura

```
.
├── index.html          # Landing page
├── loja.html           # Catálogo / loja
├── css/
│   ├── style.css       # Estilos globais e da landing
│   └── shop.css        # Estilos da loja
├── js/
│   ├── main.js         # Navbar, menu mobile, scroll reveal
│   └── shop.js         # Catálogo, carrinho e checkout via WhatsApp
└── assets/             # Imagens (.webp) — identidade e coleções
```

## 🚀 Rodando localmente

Por ser estático, basta servir os arquivos. Algumas opções:

```bash
# Python
python -m http.server 5500

# Node (npx)
npx serve
```

Depois acesse `http://localhost:5500`.

> No VS Code, a extensão **Live Server** também funciona (porta configurada em `.vscode/settings.json`).

## 🌐 Publicação

O site pode ser hospedado em qualquer serviço de arquivos estáticos — **GitHub Pages**, Netlify, Vercel ou Cloudflare Pages.

Para o GitHub Pages: ative em _Settings → Pages_, selecione a branch principal e a raiz (`/`).

## 📞 Contato

- WhatsApp: [+55 (92) 99436-5884](https://wa.me/5592994365884)
- Instagram: [@allumefleur](https://instagram.com/allumefleur)

---

© 2026 Allume Fleur. Todos os direitos reservados.
