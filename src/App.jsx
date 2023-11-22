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

  const onClickClear = () =>{
    upDateInp();
    upDateRes(0);
  }


  return (
    <div className="box">
      <p className="headinf-text"> Enter a Value to Add / Substract </p>

      <input type="number" value={inp} onChange={valueChangeHandle} />
      <button className="add" onClick={addHandle}>
      
        {" "}  
        Add{" "}
        
      </button>
      
      <button className="sub" onClick={subHandle}  >  Substract </button>

     <div className="res-clear"> 
     <h3> Result: {res} </h3>
     <button className="clear" onClick={onClickClear}> Clear </button>
     
     </div>

    </div>
  );
}

export default App;
