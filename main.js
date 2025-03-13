import { LinkedList } from "./LinkedList.js";

// Tests

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list);
console.log(list.size());
console.log(list.listHead());
console.log(list.listTail());
console.log(list.at(3));
console.log(list.pop());
console.log(list.contains("cat"));
console.log(list.find("hamster"));

console.log(list.toString());