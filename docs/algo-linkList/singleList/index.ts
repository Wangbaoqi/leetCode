
// single Realize


interface INode {
  next: INode | null;
  data: number
};

class LinkNode implements INode {
  next: INode | null = null;
  data: number = -1;

  constructor(el: number) {
    this.data = el;
    this.next = null;
  }
}

export class LinkList {
  head: INode = new LinkNode(-1);

  // append
  append(newEl: number) {
    const newNode = new LinkNode(newEl);
    let curNode = this.head;
    while (curNode.next) {
      curNode = curNode.next;
    }
    curNode.next = newNode;
  }

  insert(el: number, newEl: number) {
    const curNode = this.findNodeById(el);
    if (!curNode) {
      console.log("Not't Found Node");

      return;
    }
    const newNode = new LinkNode(newEl);
    newNode.next = curNode.next;
    curNode.next = newNode;
  }

  findNodeById(el: number): INode | null {
    let dummy = this.head;
    let curNode = dummy.next;
    while (curNode && curNode?.data !== el) {
      curNode = curNode.next;
    }
    return curNode;
  }

}