import React, { useEffect, useRef, useState } from "react";

function UseRefDemo() {
  const [name, setName] = useState("");
  const renderedCount = useRef(0);

  useEffect(() => {
    renderedCount.current = renderedCount.current + 1;
  });

  return (
    <>
      {/* To demo the usage of useRef that avoids 
re-rendering when its value is changed(useState) */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <div>I rendered {renderedCount.current} times</div>
    </>
  );
}

export default UseRefDemo;
