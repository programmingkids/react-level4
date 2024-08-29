export const Detail = ({ data }) => (
  <dl className="my-detail">
    <dt>名前</dt>
    <dd>{data.name}</dd>
    <dt>HP</dt>
    <dd>{data.hp}</dd>
    <dt>MP</dt>
    <dd>{data.mp}</dd>
    <dt>職業</dt>
    <dd>{data.job}</dd>
    <dt>作成日</dt>
    <dd>{new Date(data.created_at).toLocaleString()}</dd>
    <dt>作成日</dt>
    <dd>{new Date(data.modified_at).toLocaleString()}</dd>
  </dl>
);
