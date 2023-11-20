import React, { useState } from "react";
import "./App.css";

function App() {
  const [inp, upDateInp] = useState();
  const [res, upDateRes] = useState(0);

  const valueChangeHandle = (event) => {
    upDateInp(event.target.value);
  };

  const addHandle = () => {
    upDateRes(res + parseInt(inp));
    upDateInp("");
  };

  const subHandle = () => {
    upDateRes(res - parseInt(inp));
    upDateInp("");
  };

  return (
    <div className="box">
      <p className="headinf-text"> Enter a Value to Add / Substract </p>

      <input type="text" value={inp} onChange={valueChangeHandle} />
      <button className="add" onClick={addHandle}>
        {" "}
        Add{" "}
      </button>
      <button className="sub" onClick={subHandle}>
        {" "}
        Substract{" "}
      </button>
      <h3> Result: {res} </h3>
    </div>
  );
}

export default App;
