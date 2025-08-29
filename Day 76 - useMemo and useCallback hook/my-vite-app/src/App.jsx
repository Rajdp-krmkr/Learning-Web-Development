import React, { useState, useMemo } from "react";
import { useEffect } from "react";
import UseCallbackexample from "./components/useCallbackexample";

function App() {
  const [numbers] = useState([4, 2, 9, 1, 7454]);
  const [count, setCount] = useState(0);

  // const sortingNumbers = (numbersArray, printStatement) => {
  //   console.log(printStatement);
  //   return numbersArray.sort((a, b) => a - b);
  // };

  // // Expensive sorting only runs when `numbers` changes
  // const sortedNumbers = useMemo(
  //   () => sortingNumbers(numbers, "Sorting numbers with useMemo..."),
  //   [numbers]
  // );

  // const sortedNumberswithoutUseMemo = sortingNumbers(
  //   numbers,
  //   "Sorting numbers without useMemo..."
  // );

  return (
    <div>
      {/* <p>Sorted: {sortedNumbers.join(", ")}</p>
      <p>Sorted: {sortedNumberswithoutUseMemo.join(", ")}</p>
      <p>Counter: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button> */}
      <UseCallbackexample />
    </div>
  );
}

export default App;
