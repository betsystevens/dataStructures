const assert = require("chai").assert;
const expect = require("chai").expect;
const linkedList = require("../linkedList").linkedList;

describe("linkedList tests", function() {
  it("initial empty list", function() {
    let ll = Object.create(linkedList);
    assert.equal(ll.length, 0, "list is initially empty");
    let result = ll.getList();
    assert.equal(result.length, 0, "empty array returned");
  });
  it("insert one item", function() {
    let ll = Object.create(linkedList);
    ll.insert('dog');
    assert.equal(ll.length, 1, "one item inserted");
    let result = ll.getList();
    assert.equal(result[0], 'dog', "correct item inserted");
  });
  it("insert multiple items", function() {
    let ll = Object.create(linkedList);
    ll.insert('dog');
    ll.insert('cat');
    ll.insert('pig');
    let result = ll.getList();
    assert.equal(result[0], 'dog', "first item inserted");
    assert.equal(result[1], 'cat', "second item inserted");
    assert.equal(result[2], 'pig', "third item inserted");
    assert.equal(ll.length, 3, "correct number of items inserted");
  });
  it("delete from empty list", function(){
    let ll = Object.create(linkedList);
    let result = ll.delete('x');
    assert.equal(result, 0, "nothing deleted");
    assert.equal(ll.length, 0, "correct length");
  })
  it("delete from list of one", function(){
    let ll = Object.create(linkedList);
    ll.insert(42);
    let result = ll.delete(42);
    assert.equal(result, 1, "item deleted");
    assert.equal(ll.length, 0, "correct length");
  });
  it("delete from start of list", function(){
    let ll = Object.create(linkedList);
    ll.insert('dog');
    ll.insert('cat');
    ll.insert('pig');
    let result = ll.delete('cat');
    assert.equal(result, 1, "item deleted");
    assert.equal(ll.length, 2, "correct length");
    result = ll.getList();
    assert.equal(result[0], 'dog', "first item inserted");
    assert.equal(result[1], 'pig', "second item inserted");
  });
  it("delete from end of list", function(){
    let ll = Object.create(linkedList);
    ll.insert('dog');
    ll.insert('cat');
    ll.insert('pig');
    let result = ll.delete('pig');
    assert.equal(result, 1, "item deleted");
    assert.equal(ll.length, 2, "correct length");
    result = ll.getList();
    assert.equal(result[0], 'dog', "first item inserted");
    assert.equal(result[1], 'cat', "second item inserted");
  });
  it("delete duplicate items from start of list", function(){
    let ll = Object.create(linkedList);
    ll.insert('dog');
    ll.insert('dog');
    ll.insert('cat');
    ll.insert('pig');
    let result = ll.delete('dog');
    assert.equal(result, 2, "item deleted");
    assert.equal(ll.length, 2, "correct length");
    result = ll.getList();
    assert.equal(result[0], 'cat', "first item inserted");
    assert.equal(result[1], 'pig', "second item inserted");
  });
  it("delete duplicate items from middle list", function(){
    let ll = Object.create(linkedList);
    ll.insert('dog');
    ll.insert('cat');
    ll.insert('cat');
    ll.insert('pig');
    let result = ll.delete('cat');
    assert.equal(result, 2, "item deleted");
    assert.equal(ll.length, 2, "correct length");
    result = ll.getList();
    assert.equal(result[0], 'dog', "first item inserted");
    assert.equal(result[1], 'pig', "second item inserted");
  });
  it("delete duplicate items from end of list", function(){
    let ll = Object.create(linkedList);
    ll.insert('dog');
    ll.insert('cat');
    ll.insert('pig');
    ll.insert('pig');
    let result = ll.delete('pig');
    assert.equal(result, 2, "item deleted");
    assert.equal(ll.length, 2, "correct length");
    result = ll.getList();
    assert.equal(result[0], 'dog', "first item inserted");
    assert.equal(result[1], 'cat', "second item inserted");
  });
})