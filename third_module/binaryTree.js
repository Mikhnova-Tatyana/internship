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

let binTree = new BinTree();
binTree.insert(new Node(10))
binTree.insert(new Node(20))
binTree.insert(new Node(-10))
binTree.insert(new Node(30))
binTree.insert(new Node(41))
binTree.insert(new Node(25))
console.log(binTree);
console.log(binTree.search(41));
binTree.delete(20)



class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
      this.root = null;
  }
  
  insert(data) {
    let newNode = new Node(data);
      if (this.root === null) {
        this.root = newNode;
        return;
      } 
      let currentNode = this.root;

      while(currentNode > 0) {
        if(newNode.data < currentNode.data) {
          if(!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
          } else {
          if(!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
         }
      }
  }
}


const tree = new BinarySearchTree();
tree.insert(8);
tree.insert(11);
tree.insert(15);
tree.insert(6);


  // insert(data) {
  //   let newNode = new Node(data);
  //   if (this.root === null) {
  //       this.root = newNode;
  //   } else {
  //       this.insertNode(this.root, newNode); // helper method below
  //   }
  // }

  // insertNode(node, newNode) {
  //   if (newNode.data < node.data) {
  //       if (node.left === null) {
  //           node.left = newNode;
  //       } else {
  //           this.insertNode(node.left, newNode);
  //       }
  //   } else {
  //       if (node.right === null) {
  //           node.right = newNode;
  //       } else {
  //           this.insertNode(node.right, newNode);
  //       }
  //   }
  // }


