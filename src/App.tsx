import "./App.scss";
import Cube from "./components/Cube";
import ProjectCard from "./components/ProjectCard";
import projects from "./assets/projects";

function App() {
  return (
    <>
      <header className="navbar">
        <nav>
          <a href="#home">🚀 sh. 🚀</a>
          <ul>
            <li>
              <a href="#home">🏠 home_final_v2</a>
            </li>
            <li>
              <a href="#sobre">🕵️‍♂️ sobre (quem sou)</a>
            </li>
            <li>
              <a href="#pinturas">🎨 OBRAS PRIMAS 🎨</a>
            </li>
            <li>
              <a href="#contato">📞 ligue agora!!</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="home" id="home">
          <h1>
            <span>🔥 NOME: sopa 🔥</span>
            <span>🧊 SOBRENOME: haha 🧊</span>
            <span style={{ fontSize: '1rem', color: 'red' }}>⚠️ SITE EM CONSTRUÇÃO ⚠️</span>
          </h1>
        </section>

        <hr />
        <marquee> 🏃‍♂️💨 CORRE QUE O SITE TÁ CARREGANDO!!! 🏃‍♂️💨 </marquee>
        <hr />

        <section className="sobre" id="sobre">
          <div>
            <h2>💾 SOBRE EU 💾</h2>
            <p>
              ✨ gosto muito de codar e amo html e css com javascript para fazer
              coisas bem bonitas, eu acho que fazer projetos assim deixam vc bem
              esperto e o mais inteligente 🧠🧠🧠
            </p>
            <p>
              ❌ diferente do <b>HENRIQUE SOUBHIA</b> aqui tem muita coisa legal e
              não chata 🤡, varios projetos que fiz pra aprender e rir, muita coisa
              nao funciona em tela wide e celular pq fiz no monitor quadrado 📺 da
              maior faculdade de tecnolgia da america latina. 🇧🇷🔥
            </p>
            <p>🚨 CUIDADO COM O CUBO 3D AO LADO 🚨</p>
          </div>
          <Cube />
        </section>

        <hr />

        <section className="projetos" id="pinturas">
          <h2>🖼️ PROJetos 🖼️</h2>
          <p>👇 clica ai se tiver coragem 👇</p>
          <ul className="lista de projetos">
            {projects &&
              projects.map((item, index) => (
                <li key={index}>
                  <span>⭐ PROJETO {index + 1} ⭐</span>
                  <ProjectCard
                    desc={item.desc}
                    print={item.print}
                    title={item.title}
                    linkGithub={item.linkGithub}
                    linkPadrao={item.linkPadrao && item.linkPadrao}
                  />
                </li>
              ))}
          </ul>
        </section>

        <section className="contato" id="contato">
          <h2>📱 contaTO 📱</h2>
          <p>manda mensagem no zap 🟢 ou no discord 🔵</p>
          <p>NÃO RESPONDO E-MAIL!!!! 📧❌</p>
        </section>

        <footer>
          <h2>🚩 fOOter 🚩</h2>
          <p>rodaPé do site 🤓 feito com muito guilt gui e marverrivaus ☕</p>
          <p>Copyright 1994-2026 - Todos os erros reservados</p>
        </footer>
      </main>
    </>
  );
}

export default App;