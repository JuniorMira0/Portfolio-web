# 🚀 Portfólio - Junior Mira

## 📋 Sobre o Projeto

Portfólio pessoal desenvolvido com Next.js 15, React 19 e TypeScript, apresentando projetos, habilidades e experiência como desenvolvedor Full Stack.

## ✨ Funcionalidades

- 🎨 **Tema personalizável** - Troque as cores de destaque em tempo real
- 📱 **Design responsivo** - Interface adaptável para todos os dispositivos
- ⚡ **Animações fluidas** - Transições suaves com Framer Motion
- 🎯 **Typewriter effect** - Efeito de máquina de escrever na apresentação
- ♿ **Acessibilidade** - Skip links, aria-labels e navegação por teclado
- 🌊 **Scroll suave** - Navegação fluida entre seções
- 🔧 **Componentes reutilizáveis** - Arquitetura modular e escalável

## 🛠️ Tecnologias Utilizadas

- **Framework:** Next.js 15
- **Linguagem:** TypeScript
- **Styling:** Tailwind CSS
- **Animações:** Framer Motion
- **Efeitos:** Typewriter Effect
- **Ícones:** Lucide React
- **Linting:** ESLint
- **Otimização:** Turbopack

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/JuniorMira0/portfolio-web.git

# Navegue até o diretório
cd portfolio-web

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
```

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento (com Turbopack)
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm run start

# Linting
npm run lint
```

## 📁 Estrutura do Projeto

```
app/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── SideColumnLeft.tsx
│   │   └── SideColumnRight.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       └── SkipLink.tsx
├── constants/
│   ├── about.ts
│   ├── colors.ts
│   ├── projects.ts
│   └── skills.ts
├── context/
│   └── AccentColorContext.tsx
├── lib/
│   └── utils.ts
├── globals.css
├── layout.tsx
└── page.tsx
```

## 🎨 Personalização

### Cores de Destaque

As cores podem ser modificadas no arquivo `app/constants/colors.ts`:

```typescript
export const COLOR_OPTIONS = [
  '#ffffff', // Branco
  '#f43f5e', // Rosa
  '#f97316', // Laranja
  // Adicione mais cores aqui
] as const;
```

### Dados Pessoais

Atualize suas informações nos arquivos de constantes:

- `app/constants/about.ts` - Informações pessoais
- `app/constants/projects.ts` - Projetos
- `app/constants/skills.ts` - Habilidades

## 🔧 Configuração

### Imagens

Adicione suas fotos de perfil na pasta `public/images/`:

- `fotoDePerfil.png` - Foto principal
- `fotoDePerfil2.png` - Foto da seção "Sobre"

### Formulário de Contato

Para configurar o formulário de contato, edite o arquivo `app/components/sections/ContactSection.tsx` e configure um serviço como Formspree, Netlify Forms ou similar.

## 🌟 Destaques Técnicos

- **Performance otimizada** com Next.js 15 e Turbopack
- **Tipagem forte** com TypeScript
- **CSS-in-JS** com Tailwind CSS
- **Contexto React** para gerenciamento de estado
- **Componentes funcionais** com hooks
- **Animações performáticas** com Framer Motion
- **Acessibilidade** seguindo padrões WCAG

## 📱 Responsividade

O projeto foi desenvolvido com mobile-first approach:

- **Mobile:** 320px+
- **Tablet:** 768px+
- **Desktop:** 1024px+
- **Large Desktop:** 1280px+

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir melhorias
- Submeter pull requests

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- **GitHub:** [JuniorMira0](https://github.com/JuniorMira0)
- **LinkedIn:** [junior-mira](https://www.linkedin.com/in/junior-mira/)
- **Portfolio:** [Em breve]

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
