
import React, { useContext } from 'react';
import { AppContext } from '../App';


function Alphabets({ attempt , letterPos}) {
  const { board } =useContext(AppContext);
  const letter =board[attempt][letterPos];
  return (
    <div className='letter'>{letter}</div>
  )
}

export default Alphabets;
