class BinaryTree {
  constructor() { 
    this.value = null; 
    this.right = null; 
    this.left = null;
  } 

  insert(value, node) { 
      node = node || this; 
      if (node.value === null) { 
        node.value = value; 
        return value; 
      } 
      if (value < node.value) { 
        if (node.left === null) { 
          node.left = new BinaryTree(); 
        } 
        return this.insert(value, node.left); 
      } else { 
        if (node.right === null) { 
          node.right = new BinaryTree(); 
        } 
        return this.insert(value, node.right); 
      } 
  }
  
  findMinElement(node) {
    node = node || this; 
    if (node.left === null) {
      return node;
    }
    return this.findMinElement(node.left);
  }

  delete(value, node){
    node = node || this; 
    if (value < node.value) { 
      if (node.left === null) { 
        return false; 
      } 
      node.left = this.delete(value, node.left); 
      return node; 
    } else if (value > node.value) { 
        if (node.right === null) { 
          return false; 
        } 
        node.right = this.delete(value, node.right); 
        return node; 
    } else {
        node = node || this; 
        if (node.left === null && node.right === null) {
        node = null;
        return node; 
        } else if(node.left === null) {
          node = node.right;
          return node; 
        } else if(node.right === null) {
          node = node.left;
          return node;  
        } else {
          let minElement = this.findMinElement(node.right);
          node.value = minElement.value; 
          node.right = this.delete(minElement.value, node.right); 
          return node; 
        }
    }
  }

  search(value, node) { 
    node = node || this; 
    if (value < node.value) { 
      if (node.left === null) { 
        return false; 
      } 
      return this.search(value, node.left); 
    } else if (value > node.value) { 
      if (node.right === null) { 
        return false; 
      } 
      return this.search(value, node.right); 
    } else { 
      return true;
    } 
  }
}