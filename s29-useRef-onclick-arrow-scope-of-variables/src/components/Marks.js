import React from "react";
import { useRef } from "react";

function Marks() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let sanInputRef = useRef();
  let m1aInputRef = useRef();
  let engInputRef = useRef();
  let m1bInputRef = useRef();
  let phyInputRef = useRef();
  let cheInputRef = useRef();
  let resultParaRef = useRef();

  return (
    <div>
      <form>
        <div>
          <h4 className="title">Inter 1st year marks calculator</h4>
          <label>Firstname</label>
          <input ref={firstNameInputRef}></input>
        </div>
        <div>
          <label>Lastname</label>
          <input ref={lastNameInputRef}></input>
        </div>
        <div>
          <label>Sanskrit</label>
          <input type="number" min="0" max="100" ref={sanInputRef}></input>
        </div>
        <div>
          <label>English</label>
          <input type="number" min="0" max="100" ref={engInputRef}></input>
        </div>
        <div>
          <label>M1 A</label>
          <input type="number" min="0" max="75" ref={m1aInputRef}></input>
        </div>
        <div>
          <label>M1 B</label>
          <input type="number" min="0" max="75" ref={m1bInputRef}></input>
        </div>
        <div>
          <label>Physics</label>
          <input type="number" min="0" max="60" ref={phyInputRef}></input>
        </div>
        <div>
          <label>Chemistry</label>
          <input type="number" min="0" max="60" ref={cheInputRef}></input>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let firstName = firstNameInputRef.current.value;
              let lastName = lastNameInputRef.current.value;
              let sanMarks = Number(sanInputRef.current.value);
              let engMarks = Number(engInputRef.current.value);
              let m1aMarks = Number(m1aInputRef.current.value);
              let m1bMarks = Number(m1bInputRef.current.value);
              let phyMarks = Number(phyInputRef.current.value);
              let cheMarks = Number(cheInputRef.current.value);
              let total =
                sanMarks + engMarks + m1aMarks + m1bMarks + phyMarks + cheMarks;
              firstNameInputRef.current.style.backgroundColor = "burlywood";
              sanInputRef.current.style.backgroundColor = "burlywood";
              m1aInputRef.current.style.backgroundColor = "burlywood";
              phyInputRef.current.style.backgroundColor = "burlywood";
              alert(`Total Marks are : ${total}`);
              resultParaRef.current.innerHTML = `Total marks of ${firstName} ${lastName} are  : ${total}`;
              console.log(total);
            }}
          >
            Calculate Result
          </button>
        </div>
        <p ref={resultParaRef}>Please enter values and click Calculate</p>
      </form>
    </div>
  );
}

export default Marks;
