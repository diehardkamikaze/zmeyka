export class Food {


  constructor(map) {
    let space = this.free_space(map);
    let newPos = Math.floor(Math.random() * space.length);
    this.x = space[newPos][0];
    this.y = space[newPos][1];
  }

  free_space(map) {
    let result = [];
    for (let i = 0; i < map.length; i++) {
      for(let j = 0; j < map[i].length; j++) {
        if (map[i][j] === '0')
          result.push([i,j]);
      }
    }
    return result;
  }

}