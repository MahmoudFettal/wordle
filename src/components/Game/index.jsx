import { useState } from "react";
import Board from "../Board";
import KeyBoard from "../KeyBoard";
import NavBar from "../NavBar";
import styles from "./style.module.css";

function Game() {
  const [letter, setletter] = useState("");
  const keyHandler = (letterValue) => {setletter(letterValue)}
  return (
    <div className={styles.game}>
      <NavBar />
      <hr />
      <Board letter={letter}/>
      <KeyBoard keyHandler={keyHandler}/>
    </div>
  );
}

export default Game;
