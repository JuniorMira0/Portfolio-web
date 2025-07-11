export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  repoUrl: string;
  technologies: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Sistema de Gerenciamento de Tarefas',
    description: 'Aplicação full-stack com React, Node.js e MongoDB para gerenciamento de tarefas com autenticação e dashboard.',
    imageUrl: '',
    liveUrl: '#',
    repoUrl: '#',
    technologies: ['React', 'Node.js', 'MongoDB', 'JWT']
  },
  {
    id: 2,
    title: 'E-commerce Responsivo',
    description: 'Plataforma de e-commerce com carrinho de compras, integração de pagamento e painel administrativo.',
    imageUrl: '',
    liveUrl: '#',
    repoUrl: '#',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL']
  },
  {
    id: 3,
    title: 'API REST com Documentação',
    description: 'API robusta com autenticação, validação, testes automatizados e documentação completa com Swagger.',
    imageUrl: '',
    liveUrl: '#',
    repoUrl: '#',
    technologies: ['Node.js', 'Express', 'Jest', 'Swagger']
  },
];
