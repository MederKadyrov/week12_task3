import React, { useState } from "react";

const Paragraph = () => {
  const [inpValue, setInpValue] = useState("Marlen");
  const [pValue, setPValue] = useState("");
  const saveP = function () {
    setPValue(inpValue);
  };
  const saveInp = function (e) {
    setInpValue(e.target.value);
  };
  return (
    <div>
      <input type="text" onInput={saveInp} />
      <button onClick={saveP}>Enter</button>
      <p>{pValue}</p>
    </div>
  );
};

export default Paragraph;
