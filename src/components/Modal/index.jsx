import CloseIcon from "@mui/icons-material/Close";

function Modal(props) {
  return (
    <div className="absolute w-full h-full grid place-cente">
      <div
        className="z-10 flex place-self-center flex-col rounded-xl bg-white p-5 pb-10 drop-shadow-3xl dark:bg-zinc-800 dark:text-white"
        style={{ width: "min(600px, 90vw)", height: "min(580px, 80vh)" }}
      >
        <div className="flex justify-between items-center pb-5">
          <CloseIcon className="text-white dark:text-zinc-800" />
          <h2 className="font-black text-2xl">{props.title}</h2>
          <CloseIcon
            onClick={() => {
              props.help(false);
            }}
          />
        </div>
        <div className="modal overscroll-contain overflow-y-scroll sm:px-7">
          {props.children}
        </div>
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
