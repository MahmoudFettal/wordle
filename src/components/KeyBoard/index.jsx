import BackspaceIcon from "@mui/icons-material/Backspace";
const keyboard = {
  line1: "QWERTYUIOP",
  line2: "ASDFGHJKL",
  line3: "ZXCVBNM",
};

function Key(props) {
  const x = props.value.length == 1 ? "w-10" : "p-4";
  const returnKey = () => {
    props.getKey(props.value);
  };

  return (
    <div
      className={
        x +
        " h-14 bg-gray-200 hover:bg-gray-300 grid items-center rounded font-semibold cursor-pointer"
      }
      onClick={returnKey}
    >
      {props.value}
    </div>
  );
}

function KeyBoard(props) {
  const keyHandler = (value) => {
    props.keyHandler(value);
  };
  return (
    <div className="flex flex-col items-center w-100">
      <div className="flex gap-1 my-0.5 w-fit">
        {keyboard.line1.split("").map((value, key) => (
          <Key getKey={keyHandler} value={value} key={key} />
        ))}
      </div>
      <div className="flex gap-1 my-0.5 w-fit">
        {keyboard.line2.split("").map((value, key) => (
          <Key getKey={keyHandler} value={value} key={key} />
        ))}
      </div>
      <div className="flex gap-1 my-0.5 w-fit">
        <Key value="ENTER" />
        {keyboard.line3.split("").map((value, key) => (
          <Key getKey={keyHandler} value={value} key={key} />
        ))}
        <Key value={<BackspaceIcon />} />
      </div>
    </div>
  );
}

export default KeyBoard;
