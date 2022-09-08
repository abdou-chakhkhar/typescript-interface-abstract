var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
var import_NumbersCollection = __toModule(require("./NumbersCollection"));
var import_CharactersCollection = __toModule(require("./CharactersCollection"));
var import_LinkedList = __toModule(require("./LinkedList"));
const numbersCollection = new import_NumbersCollection.NumbersCollection([1e3, 3, -5, 1]);
numbersCollection.sort();
const charactersCollection = new import_CharactersCollection.CharactersCollection("YBa");
charactersCollection.sort();
const linkedList = new import_LinkedList.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
console.log(linkedList.print());
//# sourceMappingURL=index.js.map
