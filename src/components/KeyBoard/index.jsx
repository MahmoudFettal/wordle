import { useEffect, useState } from "react";
import BackspaceIcon from "@mui/icons-material/Backspace";

const keyboard = {
  line1: "QWERTYUIOP",
  line2: "ASDFGHJKL",
  line3: "ZXCVBNM",
};

let defaultLetters = [];

"abcdefjhijklmnopqrstuvwxyz".split("").forEach((i) => {
  defaultLetters[i] = "";
});

function Key(props) {
  const [state, setState] = useState("bg-gray-200 hover:bg-gray-");

  const x = props.value.length === 1 ? "w-10 " : "p-4 ";
  const returnKey = () => {
    props.getKey(props.value);
  };

  useEffect(() => {
    if (props.state === "C") setState("bg-emerald-500 text-white");
    if (props.state === "E") setState("bg-amber-500 text-white");
    if (props.state === "N") setState("bg-zinc-500 text-white");
  }, [props.state]);

  return (
    <div
      className={
        x +
        state +
        " h-14 300 grid items-center rounded font-semibold cursor-pointer"
      }
      onClick={returnKey}
    >
      {props.value === "DEL" ? <BackspaceIcon /> : props.value}
    </div>
  );
}

function KeyBoard(props) {
  const [letters, setletters] = useState(defaultLetters);
  useEffect(() => {
    setletters(props.letters);
    console.log("yep");
  }, [props.changed]);

  const keyHandler = (value) => {
    props.keyHandler(value);
  };
  return (
    <div className="flex flex-col items-center w-100">
      <div className="flex gap-1 my-0.5 w-fit">
        {keyboard.line1.split("").map((value, key) => (
          <Key
            getKey={keyHandler}
            value={value}
            key={key}
            state={letters[value]}
          />
        ))}
      </div>
      <div className="flex gap-1 my-0.5 w-fit">
        {keyboard.line2.split("").map((value, key) => (
          <Key
            getKey={keyHandler}
            value={value}
            key={key}
            state={letters[value]}
          />
        ))}
      </div>
      <div className="flex gap-1 my-0.5 w-fit">
        <Key value="ENTER" getKey={keyHandler} />
        {keyboard.line3.split("").map((value, key) => (
          <Key
            getKey={keyHandler}
            value={value}
            key={key}
            state={letters[value]}
          />
        ))}
        <Key value="DEL" getKey={keyHandler} />
      </div>
    </div>
  );
}

export default KeyBoard;
