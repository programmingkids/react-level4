import './App.css';
import { useState, useEffect } from 'react';

import {TableBox} from './components/Table';

const API_URL = 'https://cog-study.herokuapp.com';
const PATH = '/react_level4/chapter02/player/';

function App() {
  return (
    <div className="App">
      <Title>プレイヤー一覧</Title>
      <PlayerList />
    </div>
  );
}

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    (async() => {
      const response = await fetch(API_URL + PATH, {method : 'GET'});
      const data = await response.json();
      setPlayers(data);
    })();
  },[]);
  
  return (
    <div>
      {players.length > 0 && <TableBox data={players} />}
    </div>
  );
};

const Title = (props) => <h1>{props.children}</h1>;

export default App;
