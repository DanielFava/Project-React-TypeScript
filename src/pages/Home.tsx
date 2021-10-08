import "../styles/home.scss";

import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { useHistory } from "react-router-dom";

import GoogleImg from "../assets/images/google-icon.svg";
import ProjectImg from "../assets/images/logo.svg";
import illustrationImg from "../assets/images/illustration.svg";

export function Home() {
  const history = useHistory();
  const { signInwithGoogle, user } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInwithGoogle();
    }

    history.push("/rooms/new");
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando Perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiéncia em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={ProjectImg} alt="Project" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={GoogleImg} alt="Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o Codigo da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
