import './App.css';
import { useState, useEffect } from 'react';

import { TableBox } from './components/Table';
import { Detail } from './components/Detail';

const API_URL = 'https://cog-study.herokuapp.com';
const PATH = '/react_level4/chapter02/player/2/';

function App() {
  return (
    <div className="App">
      <Title>プレイヤー表示</Title>
      <PlayerDetail />
    </div>
  );
}

const PlayerDetail = () => {
  const [player, setPlayer] = useState({});
  
  useEffect(() => {
    (async() => {
      const response = await fetch(API_URL + PATH, {method : 'GET'});
      const data = await response.json();
      setPlayer(data);
    })();
  },[]);
  
  return (
    <div>
      {Object.keys(player).length > 0 && <Detail data={player} /> }
    </div>
  );
};

const Title = (props) => <h1>{props.children}</h1>;

export default App;
