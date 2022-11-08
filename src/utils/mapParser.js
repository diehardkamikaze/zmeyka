import { MAP_TO_CELL_TYPE, ERRORS } from "../constants"


// check all symbols and return coords of start pos
export function symbolsIsValid(map) {
  let counter = 0;
  let result;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {;
      if (!MAP_TO_CELL_TYPE[map[i][j]]) {
        alert(ERRORS["bad_symbols"]);
        throw new Error(ERRORS["bad_symbols"]);
      }
      if (MAP_TO_CELL_TYPE[map[i][j]] === "snake") {
        if (counter)
          {
            alert(ERRORS["more"]);
            throw new Error(ERRORS["more"]);
          }
          counter++;
          result = [i, j];
      }
    }
  }
  return result;
}

export function copyMap(map) {
  const mapCopy = new Array(map.length);

  for (let i = 0; i < map.length; i++)
  {
    if (!mapCopy[i]) 
      mapCopy[i] = new Array(map[i].length);
    for(let j = 0; j < map[i].length; j++)
      mapCopy[i][j] = map[i][j];
  }

  return mapCopy;
}

function coloringAlgo(map, x, y) {
  map[x][y] = "R";
  const nextCoords = { 
    top: [x - 1, y],
    left: [x, y - 1],
    right: [x, y + 1],
    bottom: [x + 1, y],
 };
  for (let key in nextCoords) {
    let x = nextCoords[key][0];
    let y = nextCoords[key][1];
    if (x < 0 || y < 0 || x >= map.length || y >= map[x].length)
      return false;
    else if (map[x][y] === 'X' || map[x][y] === 'R')
      continue;
    else if (map[x][y] === '0')
    {
      let res = coloringAlgo(map, x, y);
      if (res)
        continue;
      else break; 
    }
    else return false;
  }
  return true;
}

export function mapChecker(map, coords) {
  let mapIsValid = coloringAlgo(copyMap(map), coords[0], coords[1]);
  if (!mapIsValid) {
    alert(ERRORS["bad_map"]);
    throw new Error(ERRORS["bad_map"]);
  }
  return;
}