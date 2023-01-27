import React from 'react';
import { Link } from 'react-router-dom';

export const TableBox = ({list}) => (
  <table className="my-table">
    <TableHeader />
    <TableBody list={list} />
  </table>
);

export const TableHeader = () => (
  <thead>
    <tr>
      <th>ID</th>
      <th>タイトル</th>
      <th>著者</th>
      <th>詳細</th>
      <th>削除</th>
    </tr>
  </thead>
);

const TableBody = ({list}) => (
  <tbody>
    <TableRow list={list} />
  </tbody>
);

export const TableRow = ({list}) => {
  return (
    <>
      {list.map(({id,title,author,price,created_at, modified_at}) => 
      <tr key={id}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{author}</td>
        <td><Link to={`/book/detail/${id}`}>詳細</Link></td>
        <td><Link to={`/book/delete/${id}`}>削除</Link></td>
      </tr>
      )}
    </>
  );
};
