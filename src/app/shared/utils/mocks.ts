import { IProject } from "./../../features/models/Projects";
import { IExperience } from "./../../features/models/Experience";
export const experiences: IExperience[] = [
  {
    id: 1,
    company: "Americanas S.A",
    position: "Software Engineer",
    startDate: "Fevereiro/2022",
    endDate: "Julho/2022",
    description:
      "Atuei no time do Planck dentro da Americanas, que é o time responsável pelo projeto que gerencia toda a logística da Americanas S.A. Tenho a oportunidade de estar trabalhando com a migração do sistema legado para a arquitetura de Microfrontend utilizando Reactjs.",
  },
  {
    id: 2,
    company: "Pitang Agile IT",
    position: "Frontend Developer",
    startDate: "Fevereiro/2021",
    endDate: "Fevereiro/2022",
    description:
      "Participo de uma célula ágil desenvolvendo front end em Angular e Reactjs em um projeto para a Propig Credmoura e atuo também alocado no cliente no desenvovilmento e manutenção do sistema legado Credmoura utilizando Javascript e Jquery.",
  },
  {
    id: 3,
    company: "Freelancer",
    position: "Frontend",
    startDate: "Janeiro/2021",
    endDate: "Atualmente",
    description:
      "Desenvolvi o projeto Vet4all que está sendo lançado em parceria com a Pitang Agile utilizando React Native e React js e também desenvolvi o sistema do Agil Web junto ao grupo Connor utilizando Angular 13.",
  },
  {
    id: 4,
    company: "Leiloaê",
    position: "Cofounder | CTO",
    startDate: "Julho/2018",
    endDate: "Julho/2021",
    description:
      "A Leiloaê é uma plataforma que serve para conexão de vendedores e compradores de bovinos. Atua com foco na comercialização de bovinos através do marketplace e leilão virtual.",
  },
  {
    id: 5,
    company: "Leadfinder",
    position: "Frontend Developer",
    startDate: "Agosto/2020",
    endDate: "Fevereiro/2021",
    description:
      "Atuei com frontend na construção da Plataforma Nekta que possibilita a conexão de indústrias da área de construção civil. E atuei também no desenvolvimento e análise de requisitos de uma plataforma para recrutamento e seleção de talentos para empresas, chamado Joobis.",
  },
  {
    id: 6,
    company: "Ciss S.A",
    position: "Intern | Implantation Analyst",
    startDate: "Agosto/2016",
    endDate: "Novembro/2017",
    description:
      "Iniciei como estagiário backend atuando com Java e um pouco de Flex. Depois migrei para o setor de implantação para lidar com uma integração uruguaia chamada Scanntech. Tive bastante contato com Suporte Técnico, SQL e DB2",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Ignews",
    description:
      "Blog feito para teste dos conceitos de SSR e SSG. Também foi implementada a integração com o Prismic CMS, Stripe e FaunaDB para guardar as assinaturas.",
    stacks: [
      "Next",
      "React",
      "PrismicCMS",
      "HTML",
      "CSS Modules",
      "FaunaDB",
      "Stripe",
    ],
    url_repo: "https://github.com/marcospandrade/ignews-next",
    image: "./assets/images/projects/ignews.png",
  },
  {
    id: 2,
    name: "Gameplay",
    description:
      "Aplicação mobile que serve como agendador de partidas com integração ao Discord para seleção e redirecionamento para o servidor desejado.",
    stacks: ["React Native", "Discord API", "Android"],
    url_repo: "https://github.com/marcospandrade/gameplay-react-native",
    image: "./assets/images/projects/gameplay.png",
  },
  {
    id: 3,
    name: "Space Traveling",
    description:
      "Blog utilizando os conceitos de SSR e SSG contendo testes unitários e integração com o Prismic CMS. Utilizado hoje para salvar conteúdos estudados.",
    stacks: ["React js", "Next", "HTML", "CSS", "JS"],
    url_repo: "https://github.com/marcospandrade/spacetraveling-blog",
    image: "./assets/images/projects/spacetraveling.png",
  },
  {
    id: 4,
    name: "Feedget Web",
    description:
      "Aplicação de widget para feedbacks de problemas, ideias e sugestões em sites web, que envia a descrição mais uma captura da tela",
    stacks: ["React js", "HTML", "CSS"],
    url_repo: "https://github.com/marcospandrade/feedget-web",
    image: "./assets/images/projects/feedget-web.png",
  },
  {
    id: 5,
    name: "Feedget Server",
    description:
      "Backend para o Feedget Web feito utilizando conceitos de SOLID, com integração para envio de email e testes unitários da funcionalidade principal de envio de feedback.",
    stacks: ["Node.js", "Express", "Prisma", "SOLID", "Jest"],
    url_repo: "https://github.com/marcospandrade/feedget-server",
    image: "./assets/images/projects/feedget-server.png",
  },
  {
    id: 6,
    name: "Vet4all",
    description:
      "Plataforma de teleatendimento para veterinários e donos de pet. Com features de identificação de clínicas no mapa e chamada de vídeo em tempo real.",
    stacks: ["React js", "React Native", "Android", "iOS", "GCP"],
    url_repo: "https://vet4all.com.br",
    image: "./assets/images/projects/vet4all.png",
  },
  {
    id: 7,
    name: "Portfolio",
    description:
      "Aplicação web para demonstração dos projetos pessoais desenvolvidos ao longo da carreira.",
    stacks: ["HTML", "CSS", "JS", "Angular 13"],
    url_repo: "https://github.com/marcospandrade/portfolio",
    image: "./assets/images/projects/portfolio.png",
  },
];
