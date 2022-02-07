import Box from "../Box";

function Row(props) {
    let row = [1,2,3,4,5];
    console.log(props.letter);

    return (
        <div className="flex gap-1 w-fit">
            {row.map((_, key) => <Box key={key} value={props.letter}/>)}
        </div>
    )
}

function Board(props) {
    let row = [1,2,3,4,5,6];
    console.log(props.letter);
    return (
        <div className="p-10 grid gap-y-1 items-center w-100 justify-center">
            {row.map((_, key) => <Row letter={props.letter} key={key}/>)}
        </div>
    )
}

export default Board;