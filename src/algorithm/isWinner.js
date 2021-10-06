function calculateWinner(squares, row, col, xIsNext) {
    const curPiece = xIsNext ? 'O' : 'X';
    let line = [];
    //check row
    for (let i = 0; i < row; i++) {
        line = [];
        for (let j = 0; j < col; j++) {
            if (squares[col * i + j] && squares[col * i + j] == curPiece) {
                line.push(col * i + j);
                if (line.length == 5) {
                    return {
                        player: curPiece,
                        line: line
                    }
                }
            }
            else {
                line = [];
            }
        }
    }


    //check column
    for (let i = 0; i < row; i++) {
        line = [];
        for (let j = 0; j < col; j++) {
            if (squares[col * j + i] && squares[col * j + i] == curPiece) {
                line.push(col * j + i);
                if (line.length == 5) {
                    return {
                        player: curPiece,
                        line: line
                    }
                }
            }
            else {
                line = [];
            }
        }
    }


    //check right diagonal
    for (let i = 0; i < row - 4; i++) {
        for (let j = 4; j < col; j++) {
            line = [];
            for (let t = 0; t < 5; t++) {
                if (squares[col * (i + t) + (j - t)] && squares[col * (i + t) + (j - t)] == curPiece) {
                    line.push(col * (i + t) + (j - t));
                    if (line.length == 5) {

                        return {
                            player: curPiece,
                            line: line
                        }
                    }
                }
                else {
                    line = [];
                }
            }
        }
    }

    //check left diagonal
    for (let i = 0; i < row - 4; i++) {
        for (let j = 0; j < col - 4; j++) {
            line = [];
            for (let t = 0; t < 5; t++) {
                if (squares[col * (i + t) + (j + t)] && squares[col * (i + t) + (j + t)] == curPiece) {
                    line.push(col * (i + t) + (j + t));
                    if (line.length == 5) {

                        return {
                            player: curPiece,
                            line: line
                        }
                    }
                }
                else {
                    line = [];
                }
            }
        }
    }

    return null;
}

export default calculateWinner;