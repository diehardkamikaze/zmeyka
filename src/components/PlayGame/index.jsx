import { useState } from 'react';
import './index.css'
import { GameMenu } from '../GameMenu'
import Map from '../Map';

export default function PlayGame() {
  
  const [ started, setStart] = useState(0);

  const handleGameStart = () => {
    setStart(1);
  }


  return !started ? <GameMenu handleGameStart={handleGameStart} /> : <div className="container"><Map /></div>
}