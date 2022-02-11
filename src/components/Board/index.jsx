import { useEffect, useState } from "react";
import Box from "../Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const correct = "SMART";
let defaulBoard = [];
let defaultLetters = [];

"abcdefjhijklmnopqrstuvwxyz".split("").forEach((i) => {
  defaultLetters[i] = "";
});

for (let i = 0; i < 6; i++) {
  defaulBoard.push([]);
  for (let j = 0; j < 5; j++) {
    defaulBoard[i].push(["", ""]);
  }
}

function Board(props) {
  const [letters, setLetters] = useState(defaultLetters);
  const [board, setBoard] = useState(defaulBoard);
  const [changed, setChanged] = useState(false);
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [open, setOpen] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    console.log(row, col);
    if (props.clicks !== 0) {
      if (win) {
        console.log("you win!");
      } else if (props.letter === "DEL") {
        setCol(col === 0 ? 0 : col - 1);
        setBoard((prevBoard) => {
          prevBoard[row][col === 0 ? 0 : col - 1][0] = "";
          return prevBoard;
        });
      } else {
        setBoard((prevBoard) => {
          if (col < 5) {
            if (props.letter !== "ENTER") {
              prevBoard[row][col][0] = props.letter;
              setCol(col + 1);
            }
          } else {
            if (props.letter === "ENTER") {
              let correctLetters = 0;
              for (let i = 0; i < 5; i++) {
                if (correct[i] === prevBoard[row][i][0]) {
                  prevBoard[row][i][1] = "C";
                  correctLetters++;
                } else if (correct.includes(prevBoard[row][i][0]))
                  prevBoard[row][i][1] = "E";
                else prevBoard[row][i][1] = "N";
                setRow(row + 1);
                setCol(0);
                setLetters((prev) => {
                  prev[board[row][i][0]] = board[row][i][1];
                  return prev;
                });
              }
              setChanged(!changed);

              if (correctLetters === 5) setWin(true);
              return prevBoard;
            }
          }
          return prevBoard;
        });
      }
    }
  }, [props.clicks]);

  useEffect(() => {
    props.letters(letters);
  }, [changed]);

  return (
    <div className="p-10 grid gap-y-1 items-center w-100 justify-center">
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Close me!
        </Alert>
      </Collapse>
      {board.map((row, key) => {
        return (
          <div key={key} className="flex gap-1 w-fit">
            {row.map((value, key) => (
              <Box key={key} value={value[0]} state={value[1]} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
