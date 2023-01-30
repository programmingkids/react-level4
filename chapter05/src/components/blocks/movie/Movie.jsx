import { Link } from 'react-router-dom';

export const Movie = ({id, title, url, genre}) => {
  const urlObj = new URL(url);
  const videoID = urlObj.search.slice(3);
  const imageURL = `https://i3.ytimg.com/vi/${videoID}/hqdefault.jpg`;
  
  return (
    <div className="card-container">
      <img className="card-image" src={imageURL} />
      <div className="card-title">
        <div>タイトル：{title}</div>
        <div>ジャンル：{genre}</div>
        <div>
          <Link to={`/play/${id}`}>再生</Link>｜
          <Link to={`/edit/${id}`}>編集</Link>｜
          <Link to={`/delete/${id}`}>削除</Link>
        </div>
      </div>
    </div>
  );
};
