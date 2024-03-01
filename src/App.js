import React, { useCallback, useState } from "react";
import List from "./components/List";

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  function inputOnChange(event) {
    setNumber(Number(event.target.value));
  }

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333"
  }

  function handleClick() {
    setDark(prevTheme => !prevTheme);
  }

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number]);
  return <div style={theme}>
    <input type="number" value={number} placeholder="Enter the number" onChange={inputOnChange} />
    <div>
      <button onClick={handleClick}>Toggle me</button>
    </div>
    <List getItems={getItems} />
  </div>;
}
export default App;
