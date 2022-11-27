export const GAME_START_SPEED =  500 // 400;

export const COUTNDOWN_TIMER = 3;

export const MAP_TO_CELL_TYPE = {
  0: "clear",
  '+': "clear",
  "-": "clear",
  "S": "snake",
  "W": "snake",
  "E": "snake",
  "N": "snake",
  "X": "border",
  "*": "food"
}




export const ERRORS = {
  "bad_symbols": "Map contains bad symbols",
  "more": "More than one snake on the map",
  "bad_map": "Map is incomplete"
}