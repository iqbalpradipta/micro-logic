import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./TicTacToe.css";

function Square({ value, onSquareClick }: any) {
  return (
    <Button className="square mt-1 mx-auto" variant="outline-warning" onClick={onSquareClick}>
      {value}
    </Button>
  );
}

function Winner(squares: any) {
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
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function TicTacToe({ x, squares, onPlay }: any) {
  const handleClick = (i: any) => {
    if (squares[i] || Winner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    if (x) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  };

  const winners = Winner(squares);
  let status: any;
  if (winners) {
    status = "Winner: " + winners;
  } else {
    status = "Next player: " + (x ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>  
    </>
  );
}

function Game() {
  const [x, setX] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares: any) {
    setHistory([...history, nextSquares]);
    setX(!x);
  }

  return (
    <>
      <Container style={{position: "relative", left: "500px", padding: "20px", margin: "100px"}}>
        <div className="game">
          <div className="game-board">
            <TicTacToe x={x} squares={currentSquares} onPlay={handlePlay} />
          </div>
          <div className="game-info">
            <ol>{}</ol>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Game;
