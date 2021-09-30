class ListNode {
    constructor(data, next = null) {
      this.data = data
      this.next = next
    }
  }

export default class Stack {   
    LinkedList = null;  //first node
    last = null;  //last node
    count = 0;
    
    //時間複雜度 O(1+count)
    traversal() {
        let current = this.LinkedList; //從第一個節點開始
        let previos = null;
        while (current.next != null) {
            previos = current;
            current = current.next;
        }
        return previos;  //回傳現在節點的上一個節點
    }

    //時間複雜度 O(1)
    push(value) {
        let newNode = new ListNode(value);
        if (this.count === 0) {
            // 當新增第一筆時，產生ListNode物件
            this.LinkedList = newNode;
        } else {
            this.last.next = newNode;
        }
        this.last = newNode;

        this.count++;
        console.log(this.LinkedList, `count:${this.count}`);
    }

    //時間複雜度 O(1+count)
    pop() {
        if (this.count === 0) {
            return 'nothing happened';
        } 

        const previos = this.traversal();
        const lastNodeValue = this.last.data;
        if (this.count === 1) {
            this.LinkedList = null;
        } else {
            previos.next = null;
            this.last = previos;
        }

        this.count--;
        console.log(this.LinkedList, `count:${this.count}`);
        return lastNodeValue;
    }

    //時間複雜度 O(1)
    size() {
        return this.count;
    }
}
