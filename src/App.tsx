import "./App.css";
import profile_pic from "./assets/profile-pic.jpeg";
import TimelineItem, {
  TimelineItemProps,
} from "./components/TimelineItem";

function App() {
  const projects: TimelineItemProps[] = [
    {
      year: 2021,
      title: "Breakthrough de Pacientes Hospitalizados",
      content: [
        "Extração de dados desorganizados oriundos de fontes heterogêneas",
        "Limpeza de dados públicos",
        "Estudo estatístico do perfil dos pacientes",
        "Aplicatição de algoritmos de aprendizado de máquina",
      ],
      url: "https://github.com/Mat-Alexandre/Covid-Analysis/blob/main/Data%20cleaning%20-%20Covid.ipynb",
    },

    {
      year: 2022,
      title: "Credit Score Prediction",
      content: [
        "Processo de análise exploratória dos dados",
        "Escalonamento de variáveis",
        "Treinamento de algoritmos de aprendizado de máquina",
        "Refinamento de parâmetros",
      ],
      url: "https://github.com/Mat-Alexandre/Credit-Score-Prediction-Model/blob/main/Case.ipynb",
    },
  ];

  return (
    <>
      <header className="header">
        <a href="#home" id="home-logo" className="logo">
          Matheus <span>Alexandre</span>
        </a>

        <i className="bx bx-menu" id="menu-icon"></i>

        <nav className="navbar">
          <a href="#home">Home</a>
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

          {/* <div className="social-icons">
            <a href="https://www.linkedin.com/in/matheus-alexandre-sj/">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com/Mat-Alexandre/">
              <i className="bx bxl-github"></i>
            </a>
          </div> */}

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

      <section className="projects" id="projects">
        <h2 className="heading">Projetos</h2>
        <div className="timeline-items">
          {projects.map((item, i) => {
            return (
              <TimelineItem
                key={i}
                title={item.title}
                content={item.content}
                year={item.year}
                url={item.url}
              />
            );
          })}
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">
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
