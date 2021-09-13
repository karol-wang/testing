class ListNode {
    constructor(data, next = null) {
      this.data = data
      this.next = next
    }
  }

export default class Stack {   
    LinkedList = null;
    count = 0;
    constructor() {
    }

    push(value) {
        if (this.count === 0) {
            // 當新增第一筆時，產生ListNode物件
            this.LinkedList = new ListNode(value);
        } else {
            //從第一筆開始
            let currentNode = this.LinkedList
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            //最後一筆 next === null，在最後一筆 next加入新node
            currentNode.next = new ListNode(value);
        }
        this.count++;
        console.log(this.LinkedList, `count:${this.count}`);
    }

    pop() {
        let node = this.LinkedList;
        let lastNodeValue;
        if (this.count === 0 || this.LinkedList === null) {
            return 'nothing happened';
        } 
        
        if (this.count === 1) {
            lastNodeValue = node.data;
            this.LinkedList = null;
        } else {
            while (node.next?.next != null) {
                node = node.next;
            }
            lastNodeValue = node.next.data;
            node.next = null;
        }

        this.count--;
        console.log(this.LinkedList, `count:${this.count}`);
        return lastNodeValue;
    }

    size() {
        return this.count;
    }
}
