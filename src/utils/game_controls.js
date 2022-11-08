export function initGameControls(map, snake) {
  let func = (event) => {
    let direction = snake.direction;
    if (event.code === 'KeyA' && !(direction === 'W' || direction === 'E'))
      map[snake.x][snake.y] = direction === 'N' ? '-' : '+';
    else if (event.code === 'KeyD' && !(direction === 'W' || direction ==='E'))
      map[snake.x][snake.y] = direction === 'N' ? '+' : '-';
    else if (event.code === 'KeyW' && !(direction === 'N' || direction === 'S'))
      map[snake.x][snake.y] = direction === 'W' ? '+' : '-';
    else if (event.code === 'KeyS' && !(direction === 'N' || direction === 'S'))
      map[snake.x][snake.y] =  direction === 'W' ? '-' : '+';
  }
  window.addEventListener('keydown', 
  func
  );
  return () => window.removeEventListener('keydown', func);
}

const DIRECTION_CHANGER_RIGHT = {
  'N': 'E',
  'E': 'S',
  'S': 'W',
  'W': 'N'
}

const DIRECTION_CHANGER_LEFT = {
  'E': 'N',
  'S': 'E',
  'W': 'S',
  'N': 'W'
}

export function snakeDirection(directionTo, currentDirection) {
  if (!(directionTo === '+' || directionTo === '-'))
    return;
  directionTo = (directionTo === '+') ?  DIRECTION_CHANGER_RIGHT : DIRECTION_CHANGER_LEFT;
   return directionTo[currentDirection];
}

export function directionMove(direction, coords) {
  switch (direction) {
    case 'N':
      return [coords[0] - 1, coords[1]]
    case 'W':
      return [coords[0], coords[1] - 1]
    case 'E':
      return [coords[0], coords[1] + 1]
    case 'S':
      return [coords[0] + 1, coords[1]]
    default: 
      return coords;
  }
}