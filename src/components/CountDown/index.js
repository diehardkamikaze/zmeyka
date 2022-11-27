import "./index.css"
import { useEffect, useState } from 'react';

export default function CountDown({timer}) {

  const [ remainder, setRemainder] = useState(timer);

  useEffect(() => {
    if (remainder !== 0) {
      let id = setTimeout(() => 
        setRemainder((remainder) => remainder - 1), 1000);
      return () => clearTimeout(id);
  }
  }, [remainder]);

  return remainder ? <div className="countdown">{remainder}...</div> : '';

  
}