import { useState } from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  const darkHandler = (dark) => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }

  return (
    <div className={"app dark:bg-zinc-800"}>
      <Game darkness={darkHandler} />
    </div>
  );
}

export default App;
