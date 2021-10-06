import React, { useState } from "react";
import calculateWinner from "../../algorithm/isWinner";
import Board from '../board/Board';
import './Game.css';

function Game({ row }) {
    const [history, setHistory] = useState([{
        squares: Array(row * row).fill(null),
    }]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const [isAscending, setOrder] = useState(true);

    function handleClick(i) {
        const newHistory = history.slice(0, stepNumber + 1);
        const current = newHistory[newHistory.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares, row, row) || squares[i]) {
            return;
        }

        squares[i] = xIsNext ? 'X' : 'O';
        setStepNumber(newHistory.length);
        setXIsNext(!xIsNext);
        setHistory(newHistory.concat([{
            squares: squares,
            location: [i % row + 1, (i - (i % row)) / row + 1]
        }]));
    }

    function jumpTo(step) {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    }

    function sortHistory() {
        setOrder(!isAscending);
    }

    const currentHistory = history;
    const current = currentHistory[stepNumber];
    const winner = calculateWinner(current.squares, row, row, xIsNext);

    const moves = currentHistory.map((step, move) => {

        const desc = move ?
            'Go to move #' + move + ' (' + currentHistory[move].location + ')' :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>
                    {move === stepNumber ? <b>{desc}</b> : desc}
                </button>
            </li>
        );
    });

    let status;
    if (winner) {
        status = 'Winner: ' + winner.player;
    }
    else if (!current.squares.includes(null)) {
        status = "Draw";
    }
    else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className="game">
            <div className="game-board">

                <Board
                    winningSquares={winner ? winner.line : []}
                    squares={current.squares}
                    onClick={(i) => handleClick(i)}
                    row={row}
                />
            </div>
            <div className="game-info">
                <button onClick={() => sortHistory()}>
                    Sort by: {isAscending ? "Ascending" : "Descending"}
                </button>
                <div>{status}</div>
                <ol>{isAscending ? moves : moves.reverse()}</ol>

            </div>
        </div>
    );
}


export default Game;