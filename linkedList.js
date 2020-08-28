'use strict';
/**
 *  Linked List
 * 
 */

const node = () => {
  return {
    value : null,
    next : null
  }
}

const linkedList = {
    length : 0,
    start : null,
    end : null,

    insert : function (x) {
      const newNode = node();
      newNode.value = x;
      newNode.next = null;
      this.length += 1;
      if (!this.start) {
        this.start = newNode;
      }
      else {
        let current = this.start;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    },

    delete : function(x) {
      let current = this.start;
      let prev = this.start;
      while (current) {
        if (current.value === x) {
          this.length -= 1;
          if (current === this.start) this.start = current.next; 
          prev.next = current.next;
          current = current.next;
        }
        prev = current;
        current = (current) ? current.next : null;
      }
    },

    print : function() {
      console.log(`Length: ${this.length}`)
      let current = this.start;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
}

const ll = Object.create(linkedList);