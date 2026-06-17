export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Portfólio", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Diário", href: "/diario" },
  { label: "Experiências", href: "/experiencias" },
  { label: "Contato", href: "/contato" },
];

export type FeaturedWork = {
  title: string;
  category: string;
  imageSrc: string;
};

export const featuredWorks: FeaturedWork[] = [
  {
    title: "Mata Atlântica — Silêncio Verde",
    category: "Série autoral",
    imageSrc: "/work-1.jpg",
  },
  {
    title: "Maré Baixa — Luz em Contorno",
    category: "Editorial",
    imageSrc: "/work-2.jpg",
  },
  {
    title: "São Francisco do Sul — Âmbar do Fim de Tarde",
    category: "Pôr do sol",
    imageSrc: "/work-3.jpg",
  },
  {
    title: "Habitantes do Vento — Pessoas e Paisagens",
    category: "Ensaios contemplativos",
    imageSrc: "/work-4.jpg",
  },
];

export type DiaryPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageSrc: string;
};

export const diaryPosts: DiaryPost[] = [
  {
    title: "O mar ensina a esperar",
    excerpt: "Quando a luz encontra a água, tudo se organiza em silêncio — e a imagem acontece.",
    date: "27 de maio",
    readTime: "4 min",
    imageSrc: "/diario2.jfif",
  },
  {
    title: "Uma trilha para respirar",
    excerpt: "O ritmo do chão úmido e a distância entre dois sons — fotografia como pausa.",
    date: "12 de maio",
    readTime: "5 min",
    imageSrc: "/diario1.jpg",
  },
];


