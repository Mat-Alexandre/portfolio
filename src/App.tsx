import { useState } from "react";
import "./App.css";

import profile_pic from "./assets/profile-pic.jpeg";
import ChartSvg from "./assets/chart.svg";
import EaselSvg from "./assets/easel.svg";
import EyeSvg from "./assets/eye.svg";
import MortarboardSvg from "./assets/mortarboard.svg";
import PersonSvg from "./assets/person.svg";
import VirusSvg from "./assets/virus.svg";
import DashboardSvg from "./assets/dashboard.svg";

import TimelineItem, {
  TimelineItemProps,
} from "./components/TimelineItem";
import ProjectItem, {
  ProjectItemInterface,
} from "./components/ProjectsItem";

function App() {
  const projects: ProjectItemInterface[] = [
    {
      title: "Breakthrough de Pacientes Hospitalizados",
      description:
        "Extração de dados desorganizados oriundos de fontes heterogêneas. Limpeza de dados públicos. Estudo estatístico do perfil dos pacientes. Aplicatição de algoritmos de aprendizado de máquina",
      url: "https://github.com/Mat-Alexandre/Covid-Analysis/blob/main/Data%20cleaning%20-%20Covid.ipynb",
      children: <VirusSvg />,
    },

    {
      title: "Credit Score Prediction",
      description:
        "Processo de análise exploratória dos dados. Escalonamento de variáveis. Treinamento de algoritmos de aprendizado de máquina. Refinamento de parâmetros",
      url: "https://github.com/Mat-Alexandre/Credit-Score-Prediction-Model/blob/main/Case.ipynb",
      children: <ChartSvg />,
    },

    {
      title: "BRL Counter Using Computer Vision",
      description:
        "Treinamento de modelo de visão computacional. Rotulação de imagens para criação de dataset. Utilização de Redes Neurais Convolucionais",
      url: "https://github.com/Mat-Alexandre/Coin-Counter",
      children: <EyeSvg />,
    },

    {
      title: "Análise de Dados - IDEB",
      description:
        "Resolução de case técnico SP Parcerias. Análise descritiva dos dados do IDEB 2019 e 2023. Tratamento e formatação da base de dados.",
      url: "https://github.com/Mat-Alexandre/SPParcerias-Case",
      children: <DashboardSvg />,
    },
  ];

  const experiences: TimelineItemProps[] = [
    {
      startYear: 2009,
      endYear: 2013,
      title: "Colégio Militar de Belo Horizonte",
      content: ["Ensino Fundamental", "Ensino Médio"],
    },

    {
      startYear: 2017,
      endYear: 2021,
      title: "Faculdade",
      content: [
        "Universidade Federal de São João del-Rei",
        "Graduação em Ciência da Computação",
      ],
    },

    {
      startYear: 2021,
      endYear: 2021,
      title: "Pesquisador",
      content: [
        "Iniciação Científica UFSJ",
        "Perfil dos pacientes brasileiros internados com Covid-19",
      ],
    },

    {
      startYear: 2022,
      endYear: 2022,
      title: "Analista de Dados - Loggi Tecnologia",
      content: [
        "Geração de insights por meio de modelagem de dados relacionais",
        "Criação de análises exploratórias para processamento de dados",
        "Utilização de técnicas estatísticas para interpretação de resultados (EDA)",
      ],
    },
  ];

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <header className="header">
        <a href="#home" id="home-logo" className="logo">
          Matheus <span>Alexandre</span>
        </a>

        <i
          onClick={handleMenuClick}
          className={isActive ? "bx bx-x" : "bx bx-menu"}
          id="menu-icon"></i>

        <nav
          className={isActive ? "navbar active" : "navbar"}>
          <a href="#home">Início</a>
          <a href="#experiences">Experiência</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h1>
            Olá, me chamo <span>Matheus</span>
          </h1>
          <h3 className="text-animation">
            Eu sou um <span></span>
          </h3>
          <p>
            Sou formado em Ciência da Computação pela UFSJ.
            Meu foco principal de atuação é ciência de
            dados, mas também sei me virar em outras áreas
            😜.
          </p>

          <p>
            Abaixo você poderá ver alguns dos meus
            trabalhos, nos quais aplico um pouquinho dos
            meus conhecimentes nas ferramentas de
            visualização, tratamento e análise de dados.
          </p>
          <p>
            Caso tenha interesse, não hesite em me
            contactar. Os links para isso estão logo a
            seguir.
          </p>

          <div className="btn-group">
            <a className="btn" href="#contact">
              Contato
            </a>
          </div>
        </div>

        <div className="home-img">
          <img src={profile_pic} alt="Minha imagem" />
        </div>
      </section>

      <section className="experiences" id="experiences">
        <div className="timeline-row">
          <div className="timeline-col">
            <h2 className="heading">
              <MortarboardSvg />
              Experiência
            </h2>

            <div className="timeline-box">
              {experiences.map((experience, pos) => {
                return (
                  <TimelineItem
                    content={experience.content}
                    startYear={experience.startYear}
                    endYear={experience.endYear}
                    title={experience.title}
                    key={pos}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2 className="heading">
          <EaselSvg />
          Projetos
        </h2>
        <div className="projects-container">
          {projects.map((project, i) => {
            return (
              <ProjectItem
                title={project.title}
                children={project.children}
                url={project.url}
                description={project.description}
                key={i}
              />
            );
          })}
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">
          <PersonSvg />
          Fale <span>Comigo</span>
        </h2>
        <div className="content">
          <p>
            Para mais informações, entre em contato por meio
            das minhas redes sociais.
          </p>

          <div className="social">
            <a href="https://www.linkedin.com/in/matheus-alexandre-sj/">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com/Mat-Alexandre/">
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <ul className="list">
          <li>
            <a href="#">Sobre Mim</a>
          </li>

          <li>
            <a href="#experiences">Experiência</a>
          </li>

          <li>
            <a href="#projects">Projetos</a>
          </li>

          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
        <p className="copyright">© Matheus Alexandre</p>
      </footer>
    </>
  );
}

export default App;
