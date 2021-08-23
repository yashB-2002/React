import { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  const [mode, setMode] = useState("light");
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#301934";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <div>
      <Navbar mode={mode} changeMode={changeMode} />
      <Textform mode={mode} />
    </div>

  )
}

export default App;
