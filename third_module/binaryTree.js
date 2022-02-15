class Node {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
    this.parent = null;
  }
}

class BinTree {
  constructor() {
    this.root = null;
  }

  insert(newNode) {
    // Если корень дерева пуст
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    function _insert(currentNode) {
      if (newNode.data < currentNode.data) {
        if (currentNode.leftChild !== null) {
          _insert(currentNode.leftChild);
        } else {
          newNode.parent = currentNode;
          currentNode.leftChild = newNode;
        }
      } else {
        if (currentNode.rightChild !== null) {
          _insert(currentNode.rightChild);
        } else {
          newNode.parent = currentNode;
          currentNode.rightChild = newNode;
        }
      }
    }
    // Ищем куда вставить, стартуем с корня
    _insert(this.root);
  }

  search(data) {

    function _search(currentNode) {
      if (currentNode === null)
        return null;
      if (currentNode.data === data)
        return currentNode;
      if (currentNode.data > data)
        return _search(currentNode.leftChild);
      else
        return _search(currentNode.rightChild);
    }
    return _search(this.root);
  }

  delete(data) {
    // Для удаления элемента с одним, или нулем, наследников
    function deleteOneOrNoChildElem(node) {
      let newNode = null;
      if (node.leftChild)
        newNode = node.leftChild;
      else if (node.rightChild)
        newNode = node.rightChild;

      if (node.parent === null) {
        this.root = newNode;
      } else {
        if (node.parent.leftChild === node) {
          node.parent.leftChild = newNode;
        } else {
          node.parent.rightChild = newNode;
        }
      }
    }
    // Для удаления элемента с двумя наследниками
    function deleteTwoChildElem(node) {
      let result = node.leftChild;
      if (result.rightChild) {
        while (result.rightChild) {
          result = result.rightChild;
        }
      }
      deleteOneOrNoChildElem(result);
      let leftNodeChild = node.leftChild;
      let rightNodeChild = node.rightChild;

      if (node.parent === null) {
        result.leftChild = leftNodeChild;
        result.rightChild = rightNodeChild;
        this.root = result;
      } else {
        if (node.parent.leftChild === node) {
          result.leftChild = leftNodeChild;
          result.rightChild = rightNodeChild;
          node.parent.leftChild = result;
        } else {
          result.leftChild = leftNodeChild;
          result.rightChild = rightNodeChild;
          node.parent.rightChild = result;
        }
      }
    }

    let node = this.search(data);
    if (node.leftChild && node.rightChild) {
      deleteTwoChildElem.call(this, node);
    }
    else {
      deleteOneOrNoChildElem.call(this, node);
    }

  }
}






class Node {
  #value; 
  #left; 
  #right; 
    constructor() { 
      this.#value = null; 
      this.#right = null; 
      this.#left = null;
    } 

  insert(value, node) { 
      node = node || this; 
      if (!node.#value) { 
        node.#value = value; 
        return value; 
      } 
      if (value > node.#value) { 
        if (!node.#right) { 
          node.#right = new Node(); 
        } 
        return this.insert(value, node.#right); 
      } else { 
        if (!node.#left) { 
          node.#left = new Node(); 
        } 
        return this.insert(value, node.#left); 
      } 
    } 

  search(value, node) { 
    node = node || this; 
    if (value > node.#value) { 
      if (!node.#right) { 
        return false; 
      } 
      return this.search(value, node.#right); 
    } else if (value < node.#value) { 
      if (!node.#left) { 
        return false; 
      } 
      return this.search(value, node.#left); 
    } else { 
      return true;
    } 
  } 

  findMinElement(node) {
    node = node || this; 
    if (!node.#left) {
      return node;
    }
    return this.findMinElement(node.#left);
  }

  delete(value, node){
    node = node || this; 
    if (value > node.#value) { 
      if (!node.#right) { 
        return false; 
      } 
      node.#right = this.delete(value, node.#right); 
      return node; 
    } else if (value < node.#value) { 
      if (!node.#left) { 
        return false; 
      } 
      node.#left = this.delete(value, node.#left); 
      return node; 
    } else {
        node = node || this; 
        if (!node.#left && !node.#right) {
        node = null;
        return node; 
        } else if(!node.#left) {
          node = node.#right;
          return node;
        } else if(!node.#right) {
          node = node.#left;
          return node;
        } else {
          let minElement = this.findMinElement(node.#right);
          node.#value = minElement.#value; 
          node.#right = this.delete(minElement.#value, node.#right); 
          return node;
        }
    }
  }
}


    
  

let tree = new Node;
tree.insert(6);
tree.insert(5);
tree.insert(4);
tree.insert(3);
tree.insert(-1);
tree.insert(-2);
tree.insert(10);
tree.insert(18);
tree.insert(1);
tree.insert(2);


let tree = new Node;
tree.add(6);
tree.add(5);
tree.add(4);
tree.add(3);
tree.add(-1);
tree.add(-2);
tree.add(10);
tree.add(18);
tree.add(1);
tree.add(2);
