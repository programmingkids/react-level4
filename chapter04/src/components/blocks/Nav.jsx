import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => (
  <nav>
    <ul>
      <li><Link to="/">一覧</Link></li>
      <li><Link to="/book/create">新規作成</Link></li>
    </ul>
  </nav>
);
