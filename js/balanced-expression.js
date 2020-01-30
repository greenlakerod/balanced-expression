class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function Node2(value) {
  return {
    value: value,
    next: null,
  };
}

class StackList {
  constructor(size) {
    if (size < 2) {
      throw new Error('invalid stack size');
    }

    this.size = size;
    this.count = 0;
    this.head = null;
  }

  push(value) {
    if (this.count === this.size) {
      throw new Error('stack is full');
    }

    const n = new Node(value);

    if (!this.head) {
      this.head = n;
    } else {
      n.next = this.head;
      this.head = n;
    }

    this.count++;
  }

  pop() {
    if (!this.head) {
      throw new Error('stack is already empty');
    }

    const n = this.head;
    this.head = this.head.next;
    this.count--;

    return n.value;
  }

  isEmpty() {
    return this.head === null;
  }
}

function StackList2(size) {
  if (size < 2) {
    throw new Error('invalid stack size');
  }

  let _size = size;
  let _count = 0;
  let _head = null;

  function push(value) {
    if (_count === _size) {
      throw new Error('stack is full');
    }

    const n = Node2(value);

    if (!_head) {
      _head = n;
    } else {
      n.next = _head;
      _head = n;
    }

    _count++;
  }

  function pop() {
    if (!_head) {
      throw new Error('stack is already empty');
    }

    const n = _head;
    _head = _head.next;
    _count--;

    return n.value;    
  }

  function isEmpty() {
    return _head === null;
  }

  return {
    push: push,
    pop: pop,
    isEmpty: isEmpty,
  };
}

class StackArray {
  constructor(size) {
    if (size < 2) {
      throw new Error('invalid stack size');
    }

    this.size = size;
    this.count = 0;
    this.top = -1;
    this.items = [];
  }

  push(value) {
    if (this.count === this.size) {
      throw new Error('stack is full');
    }

    this.items[++this.top] = value;
  }

  pop() {
    if (this.top === -1) {
      throw new Error('stack is already empty');
    }

    const value = this.items[this.top--];
    
    return value;
  }

  isEmpty() {
    return this.top === -1;
  }
}

function StackArray2(size) {
  if (size < 2) {
    throw new Error('invalid stack size');
  }

  let _size = size;
  let _count = 0;
  let _top = -1;
  let _items = [];

  function push(value) {
    if (_count === _size) {
      throw new Error('stack is full');
    }

    _items[++_top] = value;
  }

  function pop() {
    if (_top === -1) {
      throw new Error('stack is already empty');
    }

    const value = _items[_top--];
    
    return value;
  }

  function isEmpty() {
    return _top === -1;
  }
  
  return {
    push: push,
    pop: pop,
    isEmpty: isEmpty,
  };
}

const pairs = {
  ')': '(',
  '}': '{',
  ']': '[',
};

function isStatementBalanced(str) {
  if (!str) {
    return true;
  }

  const stack = StackList2(500);
  // const stack = StackArray2(500);
  // const stack = new StackArray(500);
  // const stack = new StackList(500);

  for (let i = 0; i < str.length; i++) {
    const c = str[i];

    if (c === ' ') {
      continue;
    }

    if (c === '{' || c === '[' || c === '(') {
      stack.push(c);
    } else if (c === '}' || c === ']' || c === ')') {
      if (stack.isEmpty()) {
        return false;
      } else if (pairs[c] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

// const test = '((((((())))'; // not balanced
// const test = '{()}[]'; // balanced
const test = '5x+(2/5+[3/a])'; // balanced
const balanced = isStatementBalanced(test);
const message = balanced
  ? 'statement is balanced'
  : 'statement is not balanced';

console.log(message);
