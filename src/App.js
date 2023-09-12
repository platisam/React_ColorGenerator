import React, { useState } from "react";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = usestate(false);
  const [list, setList] = useState([]);

  return <h2>color generator</h2>;
}

export default App;
