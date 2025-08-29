import React, { useState, useCallback } from "react";

const Button = React.memo(({ onClick }) => {
  console.log("Rendering Button:");
  return <button onClick={onClick}>Increment</button>;
});

export default function UseCallbackexample() {
  const [count, setCount] = useState(0);

  //   Without useCallback, this function is recreated every render
  const increment = useCallback(() => {
    console.log("Hello...");
    setCount((c) => c - 1);
  }, []);

  //   const increment = () => {
  //     console.log("Hello..");
  //     setCount((c) => c + 1);
  //   };

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment} />
    </div>
  );
}

/*
    useMemo:  Caches the result of a function based on dependencies.
    useCallback: Caches the function definition itself based on dependencies.
    react.memo: Caches the result of a component render based on props.
    
*/
