import React, { useState } from 'react';
import Game from './game/Game';
import './header/Header.css';

function App() {
    const [row, setRow] = useState(0);
    const [isPreGame, setPreGame] = useState(true);

    function handleCreateBoard() {
        const r = document.getElementsByName('rowValue')[0].value;
        if (r < 5 || r > 20) {
            alert('number of row and column must be from 5 to 20!')
        }
        else {
            setRow(r)
        }
    }

    function startGame() {
        setPreGame(false);
        handleCreateBoard();
    }

    return (
        <div>
            <div className='flex-container' >
                <h1>Caro</h1>
                <div class='flex-create-board'>
                    <div className='padding'>
                        <p>Nhập số hàng</p>
                        <input disabled={!isPreGame}
                            className='input' name='rowValue' placeholder='Số hàng' type='number' min='5' max='20' />
                    </div>
                    <button
                        onClick={() => startGame()}
                        disabled={!isPreGame}
                        className='button'>
                        Tạo bàn cờ
                    </button>
                </div>
            </div>
            {isPreGame?<></>:
            <Game row={row} />}
        </div>
    );
}

export default App;