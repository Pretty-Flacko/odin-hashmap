class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(key, value) {
    const newNode = new Node(key, value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) current = current.next;

    current.next = newNode;
  }

  find(key) {
    let current = this.head;

    while (current) {
      if (current.key === key) return current;
      current = current.next;
    }

    return null;
  }
}

export default LinkedList;
