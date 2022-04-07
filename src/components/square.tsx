interface Props {
  value: "X" | "O";
  idx: number;
  makeMove: (idx: number) => void;
}

const Square: React.FC<Props> = ({ value, makeMove, idx }) => {
  return (
    <>
      {value === "X" && (
        <button className="square" style={{ backgroundColor: "red" }}>
          {value}
        </button>
      )}
      {value === "O" && (
        <button className="square" style={{ backgroundColor: "blue" }}>
          {value}
        </button>
      )}
      {!value && (
        <button onClick={() => makeMove(idx)} className="square"></button>
      )}
    </>
  );
};

export default Square;
