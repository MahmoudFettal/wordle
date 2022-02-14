import { useState, useEffect } from "react";
import Board from "../Board";
import Help from "../Help";
import KeyBoard from "../KeyBoard";
import Modal from "../Modal";
import NavBar from "../NavBar";
import styles from "./style.module.css";

function Game() {
  const [letter, setletter] = useState();
  const [changed, setChanged] = useState(false);
  const [letters, setLetters] = useState({});
  const [help, setHelp] = useState(false);

  useEffect(() => {
    console.log(letters);
  }, [changed]);
  const [clicked, setClicked] = useState(0);
  const keyHandler = (letterValue) => {
    setletter(letterValue);
    setClicked(clicked + 1);
  };
  const LettersHandler = (lettersValue) => {
    setLetters(lettersValue);
    setChanged(!changed);
  };
  return (
    <>
      {help && <Modal title="How to play!" help={setHelp}> <Help /> </Modal>}
      <div className={styles.game}>
        <NavBar help={setHelp} />
        <hr />
        <Board letter={letter} clicks={clicked} letters={LettersHandler} />
        <KeyBoard keyHandler={keyHandler} letters={letters} changed={changed} />
      </div>
    </>
  );
}

export default Game;
