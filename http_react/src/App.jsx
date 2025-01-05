import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch';

import './App.css'

const url = "http://localhost:3000/games"

function App() {
  // RESGATANDO DADOS
  const [games, setGames] = useState([]);

  // CUSTOM HOOK
  const {data: jogos} = useFetch(url);

  // useEffect(() => {

  //   async function getData () {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setGames(data);
  //   }

  //   getData();
  // }, [])


  // ENVIO DE DADOS
  const [newGame, setNewGame] = useState("");
  const [plataform, setPlataform] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const games = {
      nome: newGame,
      plataforma: plataform
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(games)
    })

    // CARREGAMENTO RAPIDO
    const addedGame = await res.json();

    setGames((prevProducts) => [
      ...prevProducts, addedGame
    ])

    setNewGame("");
    setPlataform("");
  }

  return (
    <div>
      <h1>Http em react</h1>
      {/* RESGATE DE DADOS */}
      <ul>
        {jogos && jogos.map((game) => (
          <li key={game.id}> 
            {game.nome} - 
            plataforma:   
            {game.plataforma}
          </li>
        ))}
      </ul>
      {/* ENVIANDO DADOS */}
      <div className='add-game'>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Game</span>
            <input type="text" value={newGame} onChange={(e) => setNewGame(e.target.value)} />
          </label>
          <label>
            <span>Plataforma</span>
            <input type="text" value={plataform} onChange={(e) => setPlataform(e.target.value)} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  )
}

export default App
