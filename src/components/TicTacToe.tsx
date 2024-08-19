import { useState } from 'react';
import Tile from './Tile';
import './TicTacToe.css';

const TicTacToe = () => {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [value, setValue] = useState('X');
  const [winningLine, setWinningLine] = useState('');

  function onTileClick(index: number) {
    const newGrid = [...grid];
    
    if (!newGrid[index] && !winningLine) {
      const value = getValue();
      newGrid[index] = value;
      setGrid(prev => newGrid);
    }

    hasWon(value, grid);
  }

  function onNewGameClick() {
    setGrid(Array(9).fill(''));
    setValue('X');
    setWinningLine('');
  }

  function toggleValue() {
    if (value === 'X') setValue('O');
    else setValue('X');
  }

  function getValue(): string {
    toggleValue();
    return value;
  }

  function hasWon(player: string, newGrid: string[]) {
    let hasWon = false;
    
    if (player === newGrid[0] && newGrid[0] === newGrid[1] && newGrid[1] === newGrid[2]) {
      hasWon = true;
      setWinningLine('012');
    } else if (player === newGrid[3] && newGrid[3] === newGrid[4] && newGrid[4] === newGrid[5]) {
      hasWon = true;
      setWinningLine('345');
    } else if (player === newGrid[6] && newGrid[6] === newGrid[7] && newGrid[7] === newGrid[8]) {
      hasWon = true;
      setWinningLine('678');
    }

    if (player === newGrid[0] && newGrid[0] === newGrid[3] && newGrid[3] === newGrid[6]) {
      hasWon = true;
      setWinningLine(prev => prev + '036');
    } else if (player === newGrid[1] && newGrid[1] === newGrid[4] && newGrid[4] === newGrid[7]) {
      hasWon = true;
      setWinningLine(prev => prev + '147');
    } else if (player === newGrid[2] && newGrid[2] === newGrid[5] && newGrid[5] === newGrid[8]) {
      hasWon = true;
      setWinningLine(prev => prev + '258');
    }

    if (player === newGrid[0] && newGrid[0] === newGrid[4] && newGrid[4] === newGrid[8]) {
      hasWon = true;
      setWinningLine(prev => prev + '048');
    }
    if (player === newGrid[2] && newGrid[2] === newGrid[4] && newGrid[4] === newGrid[6]) {
      hasWon = true;
      setWinningLine(prev => prev + '246');
    }

    return hasWon;
  }

  return (
    <div className='TicTacToe'>
      { grid.map((tile, index) => {
        return <Tile className={ winningLine.includes(index + '') ? 'winning-tile' : '' } key={ index } value={ grid[index] } onTileClick={ () => onTileClick(index) }/>;
      }) }
      <button onClick={ onNewGameClick }>New Game</button>
    </div>
  )
}

export default TicTacToe;