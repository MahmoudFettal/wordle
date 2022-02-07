function Box(props) {
  const x = props.value === "" ? "border-2 border-gray-300": "bg-amber-400"

  return (
    <div className={"w-14 h-14  "+ x +" text-white grid place-items-center p-0 m-0 font-bold text-2xl"}>
      {props.value}
    </div>
  );
}

export default Box;
