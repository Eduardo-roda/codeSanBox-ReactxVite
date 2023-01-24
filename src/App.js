import "./styles.css";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("eduardo-roda");
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${search}`);
      const data = await response.json();

      setUser(data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Buscador de Usuarios</h1>
        <div className="grid">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="ingrese el nombre del usuario"
          />
        </div>
        <div>
          <button onClick={fetchUser}>Buscar</button>
        </div>
        <article>
          <div className="container">
            <img src={user.avatar_url} alt="avatar" />
            <h4>username: {user.login}</h4>
            <p>bio : {user.bio}</p>
          </div>
        </article>
      </div>
    </div>
  );
}
