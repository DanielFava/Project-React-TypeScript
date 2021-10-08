import "../styles/home.scss";

import GoogleImg from "../assets/images/google-icon.svg";
import ProjectImg from "../assets/images/logo.svg";
import illustrationImg from "../assets/images/illustration.svg";

import { useHistory } from "react-router-dom";

import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import { database } from "../services/firabase";

export function Home() {
  const history = useHistory();
  const { signInwithGoogle, user } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    if (!user) {
      await signInwithGoogle();
    }

    history.push("/rooms/new");
  }

  async function hundleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Room does not exists");
      return;
    }

    history.push(`/rooms/${roomCode}`);
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
          <form onSubmit={hundleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o Codigo da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
