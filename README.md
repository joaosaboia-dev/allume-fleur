<div align="center">

# 🕯️ Allume Fleur

[![Live](https://img.shields.io/badge/acesse%20o%20site-allumefleur.com.br-B8872A?style=flat-square&logo=vercel&logoColor=white)](https://allumefleur.com.br)
&nbsp;
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)

</div>

Site institucional e loja de uma marca real de velas artesanais de Manaus, AM. Foi um dos meus primeiros projetos para um cliente real — construído só com HTML, CSS e JavaScript puro, sem framework nem etapa de build.

---

## O que o site tem

O projeto é dividido em duas páginas:

**Landing page** (`index.html`)
- Apresentação da marca com seção hero e animação de entrada
- Grade de coleções com layout CSS Grid
- Seção de produtos personalizados com link para orçamento no WhatsApp
- Animação de scroll reveal usando `IntersectionObserver`
- Navbar responsiva com menu hambúrguer para mobile

**Loja** (`loja.html`)
- Catálogo de produtos filtrado por coleção (sidebar com contagem por categoria)
- **Galeria de múltiplas imagens** por produto — com setas, bolinhas indicadoras e swipe no celular
- Carrinho lateral (drawer) com persistência via `localStorage`
- Seleção de aroma e tamanho/kit por produto
- Botão de finalizar pedido que gera uma mensagem formatada direto no WhatsApp

---

## Coleções disponíveis

| Coleção | Descrição |
|---------|-----------|
| Blossom | Flores esculpidas em cera — margaridas, rosas e buquês |
| Ocean | Velas gel com areia e conchas do mar |
| Calm | Aromáticas com fragrâncias naturais (Lavanda, Bamboo…) |
| Love | Coraçõezinhos de cera que derretem ao calor da chama |
| Encanto | Lembrancinhas para festas — ursinhos, leõezinhos |
| Golden | Acabamento metálico âmbar |
| Latte | Camadas inspiradas em cafés especiais |
| Sweet Fruits | Merengues com aroma adocicado |

---

## Coisas que aprendi fazendo esse projeto

**Galeria de imagens sem biblioteca**
Precisava mostrar várias fotos por produto direto na vitrine, sem abrir uma página de detalhe. Resolvi empilhando as imagens com `position: absolute` e controlando qual aparece via `opacity`. As setas e o swipe touch foram adicionados depois com JavaScript puro.

**Bug de overflow horizontal no mobile**
O menu mobile e o carrinho ficam escondidos fora da tela com `translateX(100%)`. Em celulares reais isso causava um scroll horizontal indesejado, cortando os cards. O `overflow-x: hidden` no `body` não resolve porque elementos `position: fixed` não ficam contidos por ele — a solução foi mover o `overflow-x: hidden` para o `html`.

**Carrinho sem back-end**
O estado do carrinho fica no `localStorage` do navegador. Ao fechar e abrir o site, os produtos continuam lá. Quando o cliente clica em "Finalizar Pedido", o JS monta uma mensagem com todos os itens e redireciona para o WhatsApp.

**CSS custom properties como design system**
Todas as cores, fontes, sombras e transições ficam em variáveis CSS no `:root`. Foi muito mais fácil manter consistência assim do que ficar repetindo os mesmos valores em vários lugares.

---

## Estrutura de arquivos

```
allumefleur/
├── index.html          # Landing page
├── loja.html           # Loja / catálogo
├── css/
│   ├── style.css       # Estilos globais (tokens, componentes, landing)
│   └── shop.css        # Estilos da loja e da galeria de imagens
├── js/
│   ├── main.js         # Navbar, menu mobile e scroll reveal
│   └── shop.js         # Catálogo, carrinho e checkout
└── assets/
    ├── identity/       # Logo e thumbnails das coleções
    └── collections/    # Fotos dos produtos (.webp)
```

---

## Como rodar localmente

É só servir os arquivos com qualquer servidor HTTP local:

```bash
# com Node.js (sem instalar nada)
npx serve .

# ou com Python
python -m http.server 5500
```

Se usar VS Code, a extensão **Live Server** já está configurada na porta `5500`.

---

## Deploy

Hospedado na **Vercel** com deploy automático a partir da branch `main`.  
O `vercel.json` configura cache de longo prazo para as imagens e alguns headers de segurança básicos.

---

## Contato da marca

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=flat-square&logo=whatsapp&logoColor=white)](https://wa.me/5592994365884)
[![Instagram](https://img.shields.io/badge/@allumefleur-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://instagram.com/allumefleur)
