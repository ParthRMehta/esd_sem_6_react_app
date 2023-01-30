import React, { Fragment, useState } from "react";

export default function Mul() {
  const [num1, setNum1] = useState(5);
  const [num2, setNum2] = useState(6);
  const [result, setResult] = useState(0);

  // function getSqr() {
  //   setNum(num * num);
  // }

  function addFun() {
    setResult(num1 * num2);
  }
  return (
    <Fragment>
      <h1>Multiplication</h1>
      <input
        type="text"
        onChange={(event) => {
          setNum1(event.target.value);
        }}
      />
      <input
        type="text"
        onChange={(event) => {
          setNum2(event.target.value);
        }}
      />
      <button onClick={addFun}>Multiply</button>
      <h3>{result}</h3>
      {/* <h1>
        Multiplication of {num1} and {num2} is {num1 * num2}
      </h1> */}
    </Fragment>
  );
  // return <div>Mul</div>;
}
