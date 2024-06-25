import React, {useState} from 'react'

import Alphabets from './Alphabets';

function Board() {

   
  return (

 <div className='board'>
  
   <div className= "row">
    <Alphabets letterPos={0} attempt={0}/>
    <Alphabets letterPos={1} attempt={0}/>
    <Alphabets letterPos={2} attempt={0}/>
    <Alphabets letterPos={3} attempt={0}/>
    <Alphabets letterPos={4} attempt={0}/>
    <Alphabets letterPos={5} attempt={0}/>
    </div>

   <div className= "row">
   <Alphabets letterPos={0} attempt={1}/>
    <Alphabets letterPos={1} attempt={1}/>
    <Alphabets letterPos={2} attempt={1}/>
    <Alphabets letterPos={3} attempt={1}/>
    <Alphabets letterPos={4} attempt={1}/>
    <Alphabets letterPos={5} attempt={1}/>
    </div>

   <div className= "row">
   <Alphabets letterPos={0} attempt={2}/>
    <Alphabets letterPos={1} attempt={2}/>
    <Alphabets letterPos={2} attempt={2}/>
    <Alphabets letterPos={3} attempt={2}/>
    <Alphabets letterPos={4} attempt={2}/>
    <Alphabets letterPos={5} attempt={2}/>
    </div>

   <div className= "row">
   <Alphabets letterPos={0} attempt={3}/>
    <Alphabets letterPos={1} attempt={3}/>
    <Alphabets letterPos={2} attempt={3}/>
    <Alphabets letterPos={3} attempt={3}/>
    <Alphabets letterPos={4} attempt={3}/>
    <Alphabets letterPos={5} attempt={3}/>
    </div>


   <div className= "row">
   <Alphabets letterPos={0} attempt={4}/>
    <Alphabets letterPos={1} attempt={4}/>
    <Alphabets letterPos={2} attempt={4}/>
    <Alphabets letterPos={3} attempt={4}/>
    <Alphabets letterPos={4} attempt={4}/>
    <Alphabets letterPos={5} attempt={4}/>
    </div>

   <div className= "row">
   <Alphabets letterPos={0} attempt={5}/>
    <Alphabets letterPos={1} attempt={5}/>
    <Alphabets letterPos={2} attempt={5}/>
    <Alphabets letterPos={3} attempt={5}/>
    <Alphabets letterPos={4} attempt={5}/>
    <Alphabets letterPos={5} attempt={5}/>
    </div>
    </div>
  );
}

export default Board;

