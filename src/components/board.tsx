import { useState, useEffect } from "react";
import Square from "./square";
import "../board.css";

const Board = () => {
  const [squares, setSquares] = useState<any[]>([]);
  const [winner, setWinner] = useState<"X" | "O" | null>(null);
  const [xIsNext, setxIsNext] = useState<boolean>(false);

  const gameStart = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setxIsNext(true);
  };

  useEffect(() => {
    gameStart();
  }, []);

  let player: any = "";

  const getPlayer = (): "X" | "O" => {
    player = xIsNext ? "X" : "O";
    return player;
  };

  const makeMove = (idx: number) => {
    if (!squares[idx] && winner === null) {
      squares.splice(idx, 1, getPlayer());
      setxIsNext(!xIsNext);
    }

    setWinner(calculateWinner());

    setTimeout(() => {
      if (winner) {
        gameStart();
      }
    }, 20000);
    setxIsNext(!xIsNext);
  };

  const calculateWinner = (): "X" | "O" | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  return (
    <>
      {winner && <h1>Player {winner} has won the game</h1>}
      {!winner && <h2>Next Player Is: {getPlayer()}</h2>}

      <div className="board-container">
        {squares.map((square: any, id: number) => {
          return (
            <Square key={id} value={square} makeMove={makeMove} idx={id} />
          );
        })}
      </div>
    </>
  );
};

export default Board;
