import Cell from "../Cell"
import "./index.css"
import { MAP_TO_CELL_TYPE, GAME_START_SPEED } from "../../constants"
import { useEffect, useRef, useState } from "react"
import simple_map from '../../maps/simple_map.json'
import { symbolsIsValid, mapChecker } from "../../utils/mapParser"

export default function Map() {
  
  const [ coords, setCoords] = useState({
    start: [],
    end: [],
  });

  const currentMap = useRef([]);
  
  useEffect(() => {
    let coords = symbolsIsValid(simple_map);
    mapChecker(simple_map, coords);
    currentMap.current = simple_map;
    setCoords({
      start: [...coords],
      end: [...coords]
    })
    let c = setInterval(() => {
    
      setCoords((coords) => {
        let x = coords.start[0];
        let y = coords.start[1];     
          currentMap.current[x - 1][y] = "S";
          currentMap.current[x][y] = "0";
          return {
            ...coords,
            start: [x - 1, y]
          }
      })
    
    }, GAME_START_SPEED);

    return () => clearInterval(c);
  }, []);

  return (
      <div className="mapContainer">
        {currentMap.current.map((element, i) => {
        return <div className="mapRow" key={i}>{element.map((elem, i) => {
          return <Cell key={i} type={MAP_TO_CELL_TYPE[elem]} />
        })}</div>
      })}
      </div>)
}