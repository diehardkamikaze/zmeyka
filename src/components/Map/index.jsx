import Cell from "../Cell"
import { Snake } from "../../utils/snake"
import "./index.css"
import { MAP_TO_CELL_TYPE, GAME_START_SPEED } from "../../constants"
import { useEffect, useRef, useState } from "react"
import simple_map from '../../maps/simple_map.json'
import { symbolsIsValid, mapChecker, copyMap } from "../../utils/mapParser"
import { initGameControls, snakeDirection, directionMove } from "../../utils/game_controls"

export default function Map() {
  
  const [ tick, setTick ] = useState(0);
  const snake = useRef({});

  const currentMap = useRef([]);
  
  useEffect(() => {
    let coords = symbolsIsValid(simple_map);
    mapChecker(simple_map, coords);
    currentMap.current = copyMap(simple_map);
    currentMap.current[coords[0]][coords[1]] = '0';

    snake.current = new Snake(coords[0], coords[1], simple_map[coords[0]][coords[1]]);
    snake.current.next =  new Snake(coords[0] + 1, coords[1], simple_map[coords[0]][coords[1]]);
    snake.current.next.next =  new Snake(coords[0] + 2, coords[1], simple_map[coords[0]][coords[1]]);
    snake.current.next.next.next =  new Snake(coords[0] + 3, coords[1], simple_map[coords[0]][coords[1]]);
    snake.current.next.next.next.next =  new Snake(coords[0] + 4, coords[1], simple_map[coords[0]][coords[1]]);
    snake.current.next.next.next.next.next =  new Snake(coords[0] + 5, coords[1], simple_map[coords[0]][coords[1]]);
    snake.current.next.next.next.next.next.next =  new Snake(coords[0] + 6, coords[1], simple_map[coords[0]][coords[1]]);
    snake.current.next.next.next.next.next.next.next =  new Snake(coords[0] + 7, coords[1], simple_map[coords[0]][coords[1]]);
    let remover = initGameControls(currentMap.current, snake.current);
    return remover;
  }, []);


  useEffect(() => {
    let id = setTimeout(() => { 
      let curSnakePart = snake.current;
      while (curSnakePart) {
        let newDir = snakeDirection(currentMap.current[curSnakePart.x][curSnakePart.y], curSnakePart.direction);
        if (newDir)
          curSnakePart.direction = newDir;
        let newCoords = directionMove(curSnakePart.direction, [curSnakePart.x, curSnakePart.y]);
        if (curSnakePart.next === null)
          currentMap.current[curSnakePart.x][curSnakePart.y] = '0';
        if (currentMap.current[newCoords[0]][newCoords[1]] === 'X')
        {
          console.log("GAME OVER");
          window.location.reload();
        }
        else {
          curSnakePart.x = newCoords[0];
          curSnakePart.y = newCoords[1];
        }
        
        curSnakePart = curSnakePart.next;
      }
      
      setTick(tick + 1);
    }, GAME_START_SPEED)
    return () => clearTimeout(id);
  }, [tick])

  return (
      <div className="mapContainer">
        {currentMap.current.map((element, i) => {
        return <div className="mapRow" key={i}>{element.map((elem, j) => {
          return snake.current.find((x,y) => (x==i && y==j)) ? <Cell key={j} type={MAP_TO_CELL_TYPE["S"]} /> : <Cell key={j} type={MAP_TO_CELL_TYPE[elem]} />
        }
        )}</div>
      })}
      </div>)
}