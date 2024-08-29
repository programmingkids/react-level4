import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { TableBox } from './components/Table';
import { Detail } from './components/Detail';
import { Form } from './components/Form';

const API_URL = 'https://cog-study.herokuapp.com';
const PATH = '/react_level4/chapter03/enemy/';

function App() {
  return (
    <div className="App">
      <Title>敵登録</Title>
      <EnemyForm />
      <hr />
      <EnemyList />
    </div>
  );
}

const EnemyForm = () => {
  const [enemy, setEnemy] = useState({
    name: '',
    hp: '',
    type: '',
    attack: '',
  });

  const handleOnChange = (e) => {
    setEnemy((enemy) => ({
      ...enemy,
      [e.target.id]: e.target.value,
    }));
  };

  const handleOnClickButton = (e) => {
    (async () => {
      const response = await axios.post(API_URL + PATH, enemy);
      const data = response.data;
      console.log(data);

      setEnemy({
        name: '',
        hp: '',
        type: '',
        attack: '',
      });
    })();
  };

  return (
    <Form
      enemy={enemy}
      handleOnChange={handleOnChange}
      handleOnClickButton={handleOnClickButton}
    />
  );
};

const EnemyList = () => {
  const [enemies, setEnemies] = useState([]);

  const fetchEnemyList = async () => {
    const response = await axios.get(API_URL + PATH);
    const data = response.data;
    return data;
  };

  const getEnemyList = async () => {
    const enemyList = await fetchEnemyList();
    setEnemies(enemyList);
  };

  const handleOnClick = (e) => {
    getEnemyList();
  };

  useEffect(() => {
    getEnemyList();
  }, []);

  return (
    <div>
      <div className="btnUpdate">
        <button onClick={handleOnClick}>一覧更新</button>
      </div>
      {enemies.length > 0 && <TableBox data={enemies} />}
    </div>
  );
};

const Title = (props) => <h1>{props.children}</h1>;

export default App;
