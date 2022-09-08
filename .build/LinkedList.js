var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  LinkedList: () => LinkedList
});
var import_Sorter = __toModule(require("./Sorter"));
class Node {
  constructor(data) {
    this.data = data;
  }
  next = null;
}
class LinkedList extends import_Sorter.Sorter {
  head = null;
  add(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }
  get length() {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }
  at(index) {
    if (!this.head)
      throw new Error("Index out of bounds");
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index)
        return node;
      counter++;
      node = node.next;
    }
    throw new Error("Index out of bounds");
  }
  compare(leftIndex, rightIndex) {
    if (!this.head)
      throw new Error("List is empty");
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }
  swap(leftIndex, rightIndex) {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }
  print() {
    if (!this.head)
      return;
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LinkedList
});
//# sourceMappingURL=LinkedList.js.map
