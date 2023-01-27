import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { TableBox } from './components/Table';

const API_URL = 'https://cog-study.herokuapp.com';
const PATH = '/react_level4/chapter03/enemy/';

function App() {
  return (
    <div className="App">
      <Title>敵一覧</Title>
      <EnemyList />
    </div>
  );
}

const EnemyList = () => {
  const [enemies, setEnemies] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(API_URL + PATH);
      const data = response.data;
      setEnemies(data);
    })();
  },[]);
  
  return (
    <div>
      {enemies.length > 0 && <TableBox data={enemies} />}
    </div>
  );
};

const Title = (props) => <h1>{props.children}</h1>;

export default App;
