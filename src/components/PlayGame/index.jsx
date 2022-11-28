import { useState } from 'react';
import './index.css'
import { GameMenu } from '../GameMenu'
import Map from '../Map';
import { GameInterface } from '../GameInterface';

export default function PlayGame() {
  
  const [ started, setStart] = useState(0);

  const handleGameStart = () => {
    setStart(1);
  }


  return !started ? 
      <GameMenu handleGameStart={handleGameStart} /> : 
      <GameInterface level={5} totalscore={10} score={4}><div className="container"><Map /></div></GameInterface>
}