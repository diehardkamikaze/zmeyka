import Cell from "../Cell"
import "./index.css"
import { MAP_TO_CELL_TYPE, GAME_START_SPEED } from "../../constants"
import { useEffect, useRef, useState } from "react"
import simple_map from '../../maps/simple_map.json'
import { symbolsIsValid, mapChecker, copyMap } from "../../utils/mapParser"
import { initGameControls, snakeDirection, directionMove } from "../../utils/game_controls"

export default function Map() {
  
  const [ tick, setTick ] = useState(0);
  console.log(tick);
  const snake = useRef({});

  const currentMap = useRef([]);
  
  useEffect(() => {
    let coords = symbolsIsValid(simple_map);
    mapChecker(simple_map, coords);
    currentMap.current = copyMap(simple_map);
    currentMap.current[coords[0]][coords[1]] = '0';

    snake.current = {
      x: coords[0],
      y: coords[1],
      next: null,
      direction: simple_map[coords[0]][coords[1]],
    };
    let remover = initGameControls(currentMap.current, snake.current);
    return remover;
  }, []);


  useEffect(() => {
    let id = setTimeout(() => {
      console.log(currentMap.current);
      let newDir = snakeDirection(currentMap.current[snake.current.x][snake.current.y], snake.current.direction);
      console.log(newDir);
      if (newDir)
        snake.current.direction = newDir;
      let newCoords = directionMove(snake.current.direction, [snake.current.x, snake.current.y]);
      currentMap.current[snake.current.x][snake.current.y] = '0';
      if (currentMap.current[newCoords[0]][newCoords[1]] === 'X')
      {
        alert("GAME OVER");
        window.location.reload();
      }
      else {
        snake.current.x = newCoords[0];
        snake.current.y = newCoords[1];
      }
      if (!snake.current.next)
      setTick(tick + 1);
    }, GAME_START_SPEED)
    return () => clearTimeout(id);
  }, [tick])

  return (
      <div className="mapContainer">
        {currentMap.current.map((element, i) => {
        return <div className="mapRow" key={i}>{element.map((elem, j) => {
          return (snake.current.x === i && snake.current.y === j) ? <Cell key={j} type={MAP_TO_CELL_TYPE["S"]} /> : <Cell key={j} type={MAP_TO_CELL_TYPE[elem]} />
        })}</div>
      })}
      </div>)
}