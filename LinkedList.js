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

  remove(key) {
    if (!this.head) return false;

    if (this.head.key === key) {
      this.head = this.head.next;
      return true;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.key === key) {
        current.next = current.next.next;
        return true;
      }
      current = current.next;
    }

    return false;
  }

  getKeys() {
    const keys = [];
    let current = this.head;
    while (current) {
      keys.push(current.key);
      current = current.next;
    }
    return keys;
  }

  getValues() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

export default LinkedList;
