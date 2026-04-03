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

  get(key) {
    const index = this.hash(key);
    const list = this.buckets[index];

    if (!list) return null;

    const node = list.find(key);
    return node ? node.value : null;
  }

  has(key) {
    const index = this.hash(key);
    const list = this.buckets[index];

    if (!list) return false;

    return !!list.find(key);
  }

  remove(key) {
    const index = this.hash(key);
    const list = this.buckets[index];

    if (!list) return false;

    const removed = list.remove(key);
    if (removed) this.size--;

    return removed;
  }

  length() {
    return this.size;
  }

  clear() {
    this.capacity = 16;
    this.buckets = new Array(this.capacity).fill(null);
    this.size = 0;
  }

  keys() {
    const allKeys = [];
    for (let list of this.buckets) {
      if (!list) continue;
      allKeys.push(...list.getKeys());
    }
    return allKeys;
  }

  values() {
    const allValues = [];
    for (let list of this.buckets) {
      if (!list) continue;
      allValues.push(...list.getValues());
    }
    return allValues;
  }
}

export default HashMap;
