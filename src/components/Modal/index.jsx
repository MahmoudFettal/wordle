import CloseIcon from "@mui/icons-material/Close";

function Modal(props) {
  return (
    <div className="absolute w-full h-full grid place-cente">
      <div className="z-10 flex place-self-center flex-col w-128 h-128 rounded-xl bg-white p-5 drop-shadow-3xl dark:bg-zinc-800 dark:text-white">
        <div className="flex justify-between items-center">
          <CloseIcon className="text-white dark:text-zinc-800" />
          <h2 className="font-black text-2xl">{props.title}</h2>
          <CloseIcon
            onClick={() => {
              props.help(false);
            }}
          />
        </div>
        <div className="px-10">{props.children}</div>
      </div>
      <div
        className="z-0 absolute w-full h-full grid place-cente"
        onClick={() => {
          props.help(false);
        }}
      />
    </div>
  );
}

export default Modal;
