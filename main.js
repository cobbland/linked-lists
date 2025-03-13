import { LinkedList } from "./LinkedList.js";

// Tests

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.head);

console.log(list.toString());