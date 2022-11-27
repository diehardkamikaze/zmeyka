import { GAME_LEVELS } from './game_levels'

export class Game {
  _game_levels = GAME_LEVELS
  _level = 1;


  constructor() {
    this.start_the_level(1);
  }


  start_the_level(level) {
    const { map, speed, score_to_win} = this._game_levels[level];
     
    //  init map
    //  init snake
    // start countdown
    // 

  }





  

}