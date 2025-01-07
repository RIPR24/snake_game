type T = { x: number; y: number };

class listNode {
  private val: T;
  private front: listNode | null;
  constructor(val: T) {
    this.val = val;
    this.front = null;
  }

  getVal() {
    return this.val;
  }
  setFront(frnt: listNode) {
    this.front = frnt;
  }
  getFront() {
    return this.front;
  }
  chkVal(val: { x: number; y: number }) {
    return this.val.x === val.x && this.val.y === val.y;
  }
}

class snake {
  private front: listNode;
  private end: listNode;

  constructor() {
    this.end = new listNode({ x: 50, y: 50 });
    this.front = new listNode({ x: 52, y: 50 });
    this.end.setFront(this.front);
  }

  push(coor: T) {
    var a = new listNode(coor);
    this.front.setFront(a);
    this.front = a;
  }
  pop() {
    var a = this.end.getFront();
    if (a) {
      this.end = a;
    }
  }
}
