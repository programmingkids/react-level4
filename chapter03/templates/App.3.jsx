import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { TableBox } from './components/Table';
import { Detail } from './components/Detail';

const API_URL = 'https://cog-study.herokuapp.com';
const PATH = '/react_level4/chapter03/enemy/2';

function App() {
  return (
    <div className="App">
      <Title>敵表示</Title>
      <EnemyDetail />
    </div>
  );
}

const EnemyDetail = () => {
  const [enemy, setEnemy] = useState({});

  useEffect(() => {
    (async () => {
      const response = await axios.get(API_URL + PATH);
      const data = response.data;
      setEnemy(data);
    })();
  }, []);

  return <div>{Object.keys(enemy).length > 0 && <Detail data={enemy} />}</div>;
};

const Title = (props) => <h1>{props.children}</h1>;

export default App;
