export class FoodControl {
  _free_space = [];

  constructor(map) {
    this._free_space = this.free_space(map);
  }

  free_space(map) {
    let result = {};
    let iter = 1;
    for (let i = 0; i < map.length; i++) {
      for(let j = 0; j < map[i].length; j++) {
        if (map[i][j] === '0')
          result[iter] = ([i,j]);
          result[i + 'k' + j+'m'] = iter;
          iter++;
      }
    }
    return result;
  }

  get_new_food_pos(snake) {
    const arr = [];
    while (snake) {
      arr.push(this._free_space[snake.x + 'k' +  snake.y + 'm']);
      snake = snake.next;

    }
    arr.sort((a, b) => a - b);
    let tmp;
    let start = 1;
    const snake_gaps = [];
    let i = 0;
    while (i !== arr.length) {
      tmp = arr[i];
      if (tmp > start)
        snake_gaps.push([start, tmp - 1]);
      while (arr[i + 1] === tmp + 1) {
        i++;
        tmp = arr[i + 1];
      }
      start = tmp + 1;
      i++;
    }
    start < this._free_space.length - 1 && snake_gaps.push([start, this._free_space.length - 1])
    let randGap = Math.floor(Math.random() * snake_gaps.length);
    let gapCoords = snake_gaps[randGap];
    let newPos = Math.floor(Math.random() * (gapCoords[1] - gapCoords[0]) + gapCoords[0]);
    return {
      x: this._free_space[newPos][0],
      y: this._free_space[newPos][1]
    }
  }
}
