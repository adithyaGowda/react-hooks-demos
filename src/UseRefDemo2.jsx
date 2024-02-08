import React, { useEffect, useRef, useState } from "react";

function UseRefDemo2() {
  const [name, setName] = useState("");
  const prevName = useRef();

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      {/* demo to see the previous values */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} but it used to be {prevName.current}
      </div>
    </>
  );
}

export default UseRefDemo2;
