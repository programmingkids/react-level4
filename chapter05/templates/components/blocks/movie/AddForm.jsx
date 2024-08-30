export const AddForm = ({ movie, handleOnChange, handleOnClickButton }) => (
  <div className="movieForm">
    <div className="m-form-text-container">
      <div className="m-form-text-label">タイトル</div>
      <div>
        <input
          className="m-form-text"
          type="text"
          id="title"
          onChange={handleOnChange}
          value={movie.title}
        />
      </div>
    </div>
    <div className="m-form-text-container">
      <div className="m-form-text-label">URL</div>
      <div>
        <input
          className="m-form-text"
          type="text"
          id="url"
          onChange={handleOnChange}
          value={movie.url}
        />
      </div>
    </div>
    <div className="m-form-text-container">
      <div className="m-form-text-label">ジャンル</div>
      <div>
        <input
          className="m-form-text"
          type="text"
          id="genre"
          onChange={handleOnChange}
          value={movie.genre}
        />
      </div>
    </div>
    <div className="button-container">
      <button onClick={handleOnClickButton} className="primary">
        新規作成
      </button>
    </div>
  </div>
);
