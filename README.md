# Blog Pessoal Simples (Next.js App Router)

Este é um projeto individual de estudo utilizando **Next.js (App Router)**.  
O objetivo é construir um **blog pessoal minimalista** para praticar conceitos fundamentais como **Server Components, Client Components, roteamento dinâmico e layouts compartilhados**.

---

## 📋 Funcionalidades (PT-BR)

- **Página inicial**: Lista de posts do blog (Server Component)  
- **Posts individuais**: Páginas dinâmicas com conteúdo completo  
- **Página sobre**: Página estática com informações pessoais  
- **Navegação global**: Layout compartilhado entre páginas  
- **Botão de curtir**: Interatividade com Client Component  
- **Design responsivo**: Mobile-first, limpo e legível  

---

## 🚀 Tecnologias

- [Next.js 15](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (ou outra lib de UI, se preferir)

---

## 📂 Estrutura de pastas

app/
├── layout.tsx # Layout global
├── page.tsx # Página inicial
├── about/page.tsx # Página sobre
├── posts/[slug]/ # Página dinâmica de post
│ └── page.tsx
components/
├── PostCard.tsx # Card de post (Server Component)
└── LikeButton.tsx # Botão de curtir (Client Component)


---

## ⚙️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/blog-pessoal-nextjs.git

# Entre no diretório
cd blog-pessoal-nextjs

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev

# Acesse em http://localhost:3000

```

# 🌍 English Version
📋 Features (EN)

Homepage: Blog posts list (Server Component)

Individual posts: Dynamic pages with full content

About page: Static page with personal information

Global navigation: Shared layout across pages

Like button: Interactivity with Client Component

Responsive design: Mobile-first, clean and readable

🚀 Tech Stack

Next.js 15

React

TypeScript

Tailwind CSS
 (or any UI lib you prefer)

 app/
 ├── layout.tsx       # Global layout
 ├── page.tsx         # Homepage
 ├── about/page.tsx   # About page
 ├── posts/[slug]/    # Dynamic post page
 │    └── page.tsx
components/
 ├── PostCard.tsx     # Post card (Server Component)
 └── LikeButton.tsx   # Like button (Client Component)

# Clone repository
git clone https://github.com/YOUR-USERNAME/blog-personal-nextjs.git

# Go to project folder
cd blog-personal-nextjs

# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000

