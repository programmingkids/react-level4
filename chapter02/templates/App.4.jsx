import './App.css';
import { useState, useEffect } from 'react';
import { TableBox } from './components/Table';
import { Detail } from './components/Detail';
import { Form } from './components/Form';

const API_URL = 'https://cog-study.herokuapp.com';
const PATH = '/react_level4/chapter02/player/';

function App() {
  return (
    <div className="App">
      <Title>プレイヤー登録</Title>
      <PlayerForm />
      <hr />
      <PlayerList />
    </div>
  );
}

const PlayerForm = () => {
  const [player, setPlayer] = useState({
    name : '',
    hp : '',
    mp : '',
    job : '',
  });
  
  const handleOnChange = (e) => {
    setPlayer((player) => ({
      ...player,
      [e.target.id]: e.target.value,
    }));
  };
  
  const handleOnClickButton = (e) => {
    (async () => {
      const requestOptions = {
        method: 'post',
  	    body: JSON.stringify(player),
  	    headers: {'Content-Type': 'application/json'},
      };
      const response = await fetch(API_URL + PATH, requestOptions);
      const data = await response.json();
      console.log(data);
      
      setPlayer({
        name : '',
        hp : '',
        mp : '',
        job : '',
      });
    })();
  };
  
  return (
    <Form
      player={player}
      handleOnChange={handleOnChange}
      handleOnClickButton={handleOnClickButton}
    />
  );
};

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  
  const fetchPlayerList = async () => {
    const response = await fetch(API_URL + PATH, {method : 'GET'});
    const data = await response.json();
    return data;
  };
  
  const getPlayerList = async () => {
    const p = await fetchPlayerList();
    setPlayers(p);
  };
  
  useEffect(() => {
    getPlayerList();
  },[]);
  
  const handleOnClick = (e) => {
    getPlayerList();
  };
  
  return (
    <div>
      <div className="btnUpdate">
        <button onClick={handleOnClick}>一覧更新</button>
      </div>
      {players.length > 0 && <TableBox data={players} />}
    </div>
  );
};

const Title = (props) => <h1>{props.children}</h1>;

export default App;
