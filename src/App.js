
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { createContext , useState} from 'react';
import { boardDefault } from './words';

export const AppContext =createContext();

function App() {
  const [board ,setBoard] = useState(boardDefault);
  const [currAttemp , setCurrAttempt] = useState ({ attempt:0 , letterPos:0});

  return (
    <div className='App'>
     <nav>
      <h1>WORDLE</h1>
     </nav>
     <AppContext.Provider 
     value={{board,setBoard , currAttemp , setCurrAttempt}}>
      <div className='game'>
      <Board/>
      <Keyboard/>
      </div>
       
     </AppContext.Provider>
    </div>
  );
}

export default App;
