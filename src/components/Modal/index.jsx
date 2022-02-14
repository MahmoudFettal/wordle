import CloseIcon from "@mui/icons-material/Close";

function Modal(props) {
  return (
    <div className="absolute w-full h-full grid place-cente">
      <div className="flex place-self-center flex-col w-128 h-128 rounded-lg bg-white p-5 drop-shadow-3xl">
        <div className="flex justify-between items-center">
          <CloseIcon className="text-white" />
          <h2  className="font-black text-2xl">{props.title}</h2>
          <CloseIcon onClick={() => {props.help(false)}}/>
        </div>
        <div className="px-10">{props.children}</div>
      </div>
    </div>
  );
}

export default Modal;
