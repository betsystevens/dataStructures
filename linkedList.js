'use strict';
/**
 *  Linked List
 *   insert(item)  : inserts item to then end of the list
 *   delete(item)  : deletes all occurrences of item, 
 *                    returns 0 if item not found or count of items deleted 
 *   getList() : returns an array of all the items in the list
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
      let deleted = 0;
      while (current) {
        if (current.value === x) {
          if (current === this.start) this.start = current.next; 
          prev.next = current.next;
          current = current.next;
          this.length -= 1;
          deleted += 1;
        } else {
          prev = current;
          current = (current) ? current.next : null;
        }
      }
      return deleted;
    },
    getList : function() {
      let current = this.start;
      let arr = [];
      while (current) {
        arr.push(current.value);
        current = current.next
      }
      return arr;
    }
}

const ll = Object.create(linkedList);

exports.linkedList = linkedList;