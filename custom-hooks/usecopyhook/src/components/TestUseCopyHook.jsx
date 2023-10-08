import React, { useState } from "react";
import useCopy from "../customHook/useCopy";

const TestUseCopyHook = () => {
  const [value, setValue] = useState();
  const copyFn = useCopy();


  return (
    <div>
      <textarea value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copyFn(value)}>Copy</button>
    </div>
  );
};

export default TestUseCopyHook;
