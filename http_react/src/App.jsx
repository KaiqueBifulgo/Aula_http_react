import { useState, useEffect } from 'react'

import './App.css'

const url = "http://localhost:3000/games"

function App() {
  // RESGATANDO DADOS
  const [games, setGames] = useState([]);

  useEffect(() => {

    async function getData () {
      const res = await fetch(url);

      const data = await res.json();

      setGames(data);
    }

    getData();
  }, [])

  return (
    <div>
      <h1>Http em react</h1>
      {/* RESGATE DE DADOS */}
      <ul>
        {games.map((game) => (
          <li key={game.id}> 
            {game.nome} - 
            plataforma:   
            {game.plataforma}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
