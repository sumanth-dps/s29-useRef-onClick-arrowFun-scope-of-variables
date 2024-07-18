import { useRef } from "react";
import React from "react";

function Tenthmarks() {
  let telInputRef = useRef();
  let hinInputRef = useRef();
  let engInputRef = useRef();
  let matInputRef = useRef();
  let sciInputRef = useRef();
  let socInputRef = useRef();
  return (
    <div>
      <form>
      <div>
          <label>firstname</label>
          <input ></input>
        </div>
        <div>
          <label>lastname</label>
          <input ></input>
        </div>
        <div>
          <label>telugu</label>
          <input type="number"></input>
        </div>
        <div>
          <label>hindi</label>
          <input type="number"></input>
        </div>
        <div>
          <label>english</label>
          <input type="number"></input>
        </div>
        <div>
          <label>telugu</label>
          <input type="number"></input>
        </div>
        <div>
          <label>telugu</label>
          <input type="number"></input>
        </div>
        <div>
          <label>telugu</label>
          <input type="number"></input>
        </div>
        <button
          type="button"
          onClick={() => {
            let telMarks = Number(telInputRef);
            let hinMarks = Number(hinInputRef);
            let engMarks = Number(engInputRef);
            let matMarks = Number(matInputRef);
            let sciMarks = Number(sciInputRef);
            let socMarks = Number(socInputRef);
            let total =
              telMarks + hinMarks + engMarks + matMarks + sciMarks + socMarks;
            alert(total);
            console.log(total);
          }}
        ></button>
      </form>
    </div>
  );
}
export default Tenthmarks;
