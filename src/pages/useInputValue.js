import { useState } from "react";

export const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);
  const [value2, setValue2] = useState(0);
   return {
     value,
     onChange: e => {
      setValue(e.target.value || e.target.innerText);
      setValue2(10);
    }
  };
};