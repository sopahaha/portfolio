import "./App.scss";
import Cube from "./components/Cube";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <>
      <header className="navbar">
        <nav>
          <a href="#home">sh.</a>
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#sobre">sobre</a>
            </li>
            <li>
              <a href="">obras primas</a>
            </li>
            <li>
              <a href="">contato</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="home" id="home">
          <h1>
            <span>NOME: sopa</span>
            <span>SOBRENOME: haha</span>
          </h1>
        </section>

        <hr />

        <section className="sobre" id="sobre">
          <div>
            <h2>SOBRE EU</h2>
            <p>
              gosto muito de codar e amo html e css com javascript para fazer
              coisas bem bonitas, eu acho que fazer projetos assim deixam vc bem
              esperto e o mais inteligente
            </p>
            <p>
              diferente do <b>HENRIQUE SOUBHIA</b> aqui tem muita coisa legal e
              não chata, varios projetos que fiz pra aprender e rir, muita coisa
              nao funciona em tela wide e celular pq fiz no monitor quadrado da
              maior faculdade de tecnolgia da america latina.
            </p>
          </div>
          <Cube />
        </section>

        <hr />

        <section className="projetos">

        <ul>
          <li>
            <ProjectCard />
          </li>
        </ul>

        </section>


      </main>
    </>
  );
}

export default App;
