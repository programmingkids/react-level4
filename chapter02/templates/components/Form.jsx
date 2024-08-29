export const Form = ({player, handleOnChange, handleOnClickButton}) => (
  <div>
    <div>
      名前
      <input 
        type="text" 
        id="name" 
        onChange={handleOnChange} 
        value={player.name} 
      />
    </div>
    <div>
      HP
      <input 
        type="number" 
        id="hp" 
        onChange={handleOnChange} 
        value={player.hp}
      />
    </div>
    <div>
      MP
      <input 
        type="number" 
        id="mp" 
        onChange={handleOnChange} 
        value={player.mp}
      />
    </div>
    <div>
      職業
      <input 
        type="text"
        id="job"
        onChange={handleOnChange}
        value={player.job}
      />
    </div>
    <div className="btnPost">
      <button onClick={handleOnClickButton}>登録</button>
    </div>
  </div>
);