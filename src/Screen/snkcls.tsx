export type T = { x: number; y: number };

class listNode {
  private val: T;
  private front: listNode | null;
  private dir: number;
  constructor(val: T, dir: number) {
    this.val = val;
    this.front = null;
    this.dir = dir;
  }

  getDir() {
    return this.dir;
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
  private size: number;

  constructor() {
    this.end = new listNode({ x: 50, y: 48 }, 0);
    this.front = new listNode({ x: 52, y: 48 }, 0);
    this.end.setFront(this.front);
    this.size = 2;
  }

  getFront() {
    return this.front.getVal();
  }

  push(coor: T, dir: number) {
    var a = new listNode(coor, dir);
    this.front.setFront(a);
    this.front = a;
    this.size++;
  }

  pop() {
    var a = this.end.getFront();
    if (a) {
      this.end = a;
      this.size--;
    }
  }

  getSize() {
    return this.size;
  }

  checkEl(coor: T) {
    var a: listNode | null = this.end;
    while (a !== null) {
      if (a.chkVal(coor)) return true;
      a = a.getFront();
    }
    return false;
  }

  reset() {
    this.end = new listNode({ x: 50, y: 48 }, 0);
    this.front = new listNode({ x: 52, y: 48 }, 0);
    this.end.setFront(this.front);
    this.size = 2;
  }

  render() {
    const arr: JSX.Element[] = [];
    var a: listNode | null = this.end;
    let i = 1;
    while (a !== null) {
      var coor = a.getVal();
      arr.push(
        <div
          key={i}
          className="snk"
          style={{
            left: `${coor.x}vw`,
            top: `${coor.y}vh`,
            rotate: `${a.getDir() * 45}deg`,
          }}
        >
          {i === this.size && <div className="eyes"></div>}
        </div>
      );
      a = a.getFront();
      i++;
    }
    return arr;
  }
}

export default new snake();
