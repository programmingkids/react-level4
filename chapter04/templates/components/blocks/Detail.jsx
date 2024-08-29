import { Link } from 'react-router-dom';

export const Detail = ({ data }) => (
  <dl className="my-detail">
    <dt>タイトル</dt>
    <dd>{data.title}</dd>
    <dt>著者</dt>
    <dd>{data.author}</dd>
    <dt>金額</dt>
    <dd>{data.price}</dd>
    <dt>ジャンル</dt>
    <dd>{data.genre}</dd>
    <dt>編集</dt>
    <dd>
      <Link to={`/book/edit/${data.id}`}>編集</Link>
    </dd>
  </dl>
);
