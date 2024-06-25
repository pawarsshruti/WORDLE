import React, { useContext } from 'react'
import { AppContext } from '../App';

function Key( {keyVal , bigKey}) {
   const {board , setBoard , currAttempt , setCurrAttempt} = useContext (AppContext)
    const selectLetter = () =>
        {
            const currBoard =[...board];
            currBoard[currAttempt.attempt][currAttempt.letterPos]=keyVal;
            setBoard(currBoard);
            setCurrAttempt({...currAttempt , letterPos: currAttempt.letterPos +1});
        }
  return (
    <div className='key' id={bigKey && "big"} onClick={selectLetter}>
    {keyVal}
    </div>
  )
}

export default Key;
