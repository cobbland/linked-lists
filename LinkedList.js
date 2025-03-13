import { Node } from "./Node.js";

export class LinkedList {

    head = null;

    append(value) {
        // adds a new node containing value to the end of the list
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newNode;

        }
    }

    prepend(value) {
        // adds a new node containing value to the start of the list
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }

    size() {
        // returns the total number of nodes in the list
        let listSize = 0;
        let currentNode = this.head;
        while (currentNode.nextNode !== null) {
            listSize++;
            currentNode = currentNode.nextNode;
        }
        listSize++ // because the above loop stops before counting last node
        return listSize;
    }

    listHead() {
        // returns the first node in the list
        return this.head;
    }

    listTail() {
        // returns the last node in the list
        let currentNode = this.head;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    at(index) {
        // returns the node at the given index
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex < index) {
            currentIndex++;
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    pop() {
        // removes the last element from the list
    }

    contains(value) {
        // returns true if the passed in value is in the list 
        // and otherwise returns false.
    }

    find(value) {
        // returns the index of the node containing value, or null if not found.
    }

    toString() {
        // represents your LinkedList objects as strings, 
        // so you can print them out and preview them in the console. 
        // The format should be: ( value ) -> ( value ) -> ( value ) -> null
    } 

    // Extra credit below!
    // Extra Credit Tip: When you insert or remove a node, 
    // consider how it will affect the existing nodes. 
    // Some of the nodes will need their nextNode link updated.

    insertAt(value, index) {
        // that inserts a new node with the provided value at the given index.
    }

    removeAt(index) {
        // that removes the node at the given index.
    }

}

