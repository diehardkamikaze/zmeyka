export function free_space(map) {

}


export class Food {
  free_space;

  constructor(map) {
    this.free_space = this.find_free_space(map); 
  }

  find_free_space(map) {
    let result = [];
    for (let i = 0; i < map.length; i++) {
      for(let j = 0; j < map[i].length; j++) {
        if (map[i][j] !== 'X')
          result.push([i,j]);
      }
    }
    return result;
  }
}