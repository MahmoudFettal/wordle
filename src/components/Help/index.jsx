function Box(props) {
  let state = "text-black border-2 border-gray-300 dark:text-white";
  if (props.state === "C") state = "bg-emerald-500 text-white";
  if (props.state === "E") state = "bg-amber-500 text-white";
  if (props.state === "N") state = "bg-zinc-500 text-white";

  return (
    <div
      className={
        "w-10 h-10 grid place-items-center p-0 m-0 font-bold text-2xl " + state
      }
    >
      {props.value}
    </div>
  );
}

function Help() {
  return (
    <>
      <p className="text-left py-5 font-regular opacity-75">
        Guess the WORDLE in six tries.
        <br />
        Each guess must be a valid five-letter word. Hit the enter button to
        submit.
        <br /> After each guess, the color of the tiles will change to show how
        close your guess was to the word.
      </p>
      <hr />
      <h3 className="text-left font-bold py-5">Examples</h3>
      <div className="flex gap-1">
        <Box value="S" state="C" />
        <Box value="W" />
        <Box value="E" />
        <Box value="A" />
        <Box value="T" />
      </div>
      <p className="text-left py-2">
        The letter <b>S</b> is in the word and in the correct spot.
      </p>
      <div className="flex gap-1">
        <Box value="N" />
        <Box value="U" />
        <Box value="M" state="E" />
        <Box value="B" />
        <Box value="S" />
      </div>
      <p className="text-left py-2">
        The letter <b>M</b> is in the word and in the correct spot.
      </p>
      <div className="flex gap-1">
        <Box value="F" />
        <Box value="L" state="N" />
        <Box value="A" />
        <Box value="T" />
        <Box value="S" />
      </div>
      <p className="text-left py-2">
        The letter <b>N</b> is in the word and in the correct spot.
      </p>
    </>
  );
}

export default Help;
