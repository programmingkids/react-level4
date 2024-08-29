import React from 'react';

export const TableBox = ({data}) => (
  <table className="my-table">
    <TableHeader data={data} />
    <TableBody data={data} />
  </table>
);

export const TableHeader = ({data}) => (
  <thead>
    <tr>
      <th>ID</th>
      <th>名前</th>
      <th>HP</th>
      <th>MP</th>
      <th>職業</th>
      <th>作成日</th>
      <th>更新日</th>
    </tr>
  </thead>
);

const TableBody = ({data}) => (
  <tbody>
    <TableRow data={data} />
  </tbody>
);

export const TableRow = ({data}) => {
  return (
    <>
      {data.map(({id,name,hp, mp, job, created_at, modified_at}) => 
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{hp}</td>
        <td>{mp}</td>
        <td>{job}</td>
        <td>{new Date(created_at).toLocaleString()}</td>
        <td>{new Date(modified_at).toLocaleString()}</td>
      </tr>
      )}
    </>
  );
};
