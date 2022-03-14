class node {
    constructor (valve) {
        this.value = valve;
        this.next = null; 
    }
}

class Stack {
    constructor() {
        this.counter = 0;
        this.top = null;
    }
    push (value) {
        this.counter++;
        let newnode = new node(value);
        newnode.next= this.top;
        this.top = newnode;
    }
    
    isEmpty() {
        return this.counter===0;
    }

    pop() {
        if (this.isEmpty()) return null;
        this.counter--;
        let rmnode = this.top;
        delete this.top;
        this.top = rmnode.next;
        return rmnode;
    }

    size() {
         /* let qtdeitens = this.counter;
        return qtdeitens; */
         return this.counter;
    }

    onTop() {
        if (isEmpty()) return null;
        let tpnode = this.pop();
        this.push (tpnode.value);
        return tpnode;
    }
}

module.exports = Stack;

