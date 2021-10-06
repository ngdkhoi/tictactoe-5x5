import React from 'react';
import Square from '../square/Square';
import './Board.css'

function Board({ winningSquares, squares, onClick, row }) {
    return (
        <div>
            {renderBoard(squares, winningSquares, onClick, row)}
        </div>
    )
}

/**
 * 
 * @param {*} value
 * @param {*} winningSquares 
 * @param {*} onClick 
 * @param {*} i position
 * @returns square component
 */
function renderSquare(value, isWinning, onClick, i) {
    return (
        <Square
            isWinning={isWinning}
            key={"square " + i}
            value={value}
            onClick={() => onClick(i)}
        />
    );
}

/**
 * 
 * @param {*} squares 
 * @param {*} winningSquares 
 * @param {*} onClick 
 * @param {*} row 
 * @param {*} col
 * @returns Board component
 */
function renderBoard(squares, winningSquares, onClick, r) {
    const row = [];
    let k = 0; //key
    for (let i = 0; i < r; i++) {
        const col = [];
        for (let j = 0; j < r; j++) {
            col.push(renderSquare(squares[r * i + j], winningSquares.includes(r * i + j), onClick, r * i + j));
            k++;
        }
        row.push(<div key={k} className="board-row">{col}</div>);
    }
    return row
}


export default Board;