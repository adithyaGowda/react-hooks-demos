import React, { useRef, useState } from "react";

function UseRefDemo1() {
  const [name, setName] = useState("");
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      {/* demo to access the DOM element directly but we need to avoid
    using it to update the DOM instead use state varibales */}
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}

export default UseRefDemo1;
