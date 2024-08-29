export const Form = ({ book, handleOnChange, handleOnClickButton }) => (
  <div className="App">
    <div>
      タイトル
      <input
        type="text"
        id="title"
        onChange={handleOnChange}
        value={book.title}
      />
    </div>
    <div>
      著者
      <input
        type="text"
        id="author"
        onChange={handleOnChange}
        value={book.author}
      />
    </div>
    <div>
      金額
      <input
        type="number"
        id="price"
        onChange={handleOnChange}
        value={book.price}
      />
    </div>
    <div>
      ジャンル
      <input
        type="text"
        id="genre"
        onChange={handleOnChange}
        value={book.genre}
      />
    </div>
    <div className="btnPost">
      <button onClick={handleOnClickButton}>登録</button>
    </div>
  </div>
);
