export class Snake {


  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.next = null;
  }

  find(callback) {
    let c = this;
    while (c) {
      let res = callback(c.x, c.y);
      if (res)
        return true;
      c = c.next;
    }
    return false;
  }

  getLast() {
    let c = this;
    let last;
    while (c) {
      last = c;
      c = c.next;
    }
    return last;
  }
  
}