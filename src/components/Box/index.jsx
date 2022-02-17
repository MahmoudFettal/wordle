import { useEffect, useState } from "react";
import BackspaceIcon from "@mui/icons-material/Backspace";

function Box(props) {
  const [state, setState] = useState("text-black border-2 border-gray-300 dark:bg-zinc-800 dark:text-white");

  useEffect(() => {
    setTimeout(() => {
      if (props.state === "C")
        setState("bg-emerald-500 text-white");
      if (props.state === "E")
        setState("bg-amber-500 text-white");
      if (props.state === "N")
        setState("bg-zinc-500 text-white dark:bg-gray-700");
    }, 125 * props.pos);
  }, [props.state]);

  return (
    <div
      className={
        "h-12 w-12 sm:w-14 sm:h-14 grid place-items-center p-0 m-0 font-bold text-2xl " + state
      }
    >
      {props.value === "DEL" ? <BackspaceIcon /> : props.value}
    </div>
  );
}

export default Box;
