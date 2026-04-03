import LinkedList from "./LinkedList.js";

class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.capacity = initialCapacity;
    this.loadFactor = loadFactor;
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList();
    }

    const list = this.buckets[index];

    const existingNode = list.find(key);

    if (existingNode) {
      existingNode.value = value;
    } else {
      list.append(key, value);
      this.size++;
    }
  }
}

export default HashMap;
