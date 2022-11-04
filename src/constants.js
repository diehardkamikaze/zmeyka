export const GAME_START_SPEED = 3000;

export const MAP_TO_CELL_TYPE = {
  0: "clear",
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