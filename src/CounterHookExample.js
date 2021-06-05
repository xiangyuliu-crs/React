import React, { useState, useEffect } from "react";

export function CounterHookExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${name} clicked ${count} times`;
  });

  return (
    <div>
      <p>{name} Well done!</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>Input your name</p>
      <input value={name} onChange={(event) => setName(event.target.value)} />
    </div>
  );
}
