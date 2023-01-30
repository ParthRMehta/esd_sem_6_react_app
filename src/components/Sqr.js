/* eslint-disable no-restricted-globals */
import React, { useState } from "react";

export default function Sqr() {
  const [num, setNum] = useState(0);

  // function getSqr() {
  //   setNum(num * num);
  // }
  return (
    <>
      <h1>Find sqr</h1>
      <input
        type="text"
        onChange={(event) => {
          setNum(event.target.value);
        }}
      />
      <h1>
        Square of {num} is {num * num}{" "}
      </h1>
    </>
  );
}
