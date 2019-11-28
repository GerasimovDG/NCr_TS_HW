import { MyNode } from "./my-node.js";
export class BinaryTree {
    constructor(numb) {
        this._root = null;
        if (numb) {
            this._root = new MyNode(numb);
        }
    }
    // добавление вершины
    addNode(numb, data) {
        let newNode;
        data ? newNode = new MyNode(numb, data) : newNode = new MyNode(numb);
        let current = this._root;
        let parent;
        if (!this._root) {
            this._root = newNode;
            return;
        }
        while (true) {
            parent = current;
            if (numb < current.Key) {
                current = current.LeftChild;
                if (current == null) {
                    parent.LeftChild = newNode;
                    return;
                }
            }
            else {
                current = current.RightChild;
                if (current == null) {
                    parent.RightChild = newNode;
                    return;
                }
            }
        }
    }
    // получить корень дерева
    getRoot() {
        return this._root;
    }
    // поиск по ключу
    searchNode(key) {
        let tmpNode = this._root;
        if (key === tmpNode.Key) {
            return this._root;
        }
        while (key !== tmpNode.Key) {
            key > tmpNode.Key ? tmpNode = tmpNode.RightChild : tmpNode = tmpNode.LeftChild;
            if (tmpNode == null) {
                return null;
            }
        }
        return tmpNode;
    }
    // поиск преемника (при удалении вершины)
    getSuccessor(deleteNode) {
        let parentSuccessor = deleteNode;
        let successor = deleteNode;
        let current = successor.RightChild;
        while (current != null) {
            parentSuccessor = successor;
            successor = current;
            current = current.LeftChild;
        }
        if (successor !== deleteNode.RightChild) {
            parentSuccessor.LeftChild = successor.RightChild;
            successor.RightChild = deleteNode.RightChild;
            successor.LeftChild = deleteNode.LeftChild;
        }
        return successor;
    }
    // удаление вершины
    deleteNode(key) {
        let current = this._root;
        let parent = current;
        let isLeftChild = false;
        while (current.Key !== key) {
            parent = current;
            if (key < current.Key) {
                current = current.LeftChild;
                isLeftChild = true;
            }
            else {
                current = current.RightChild;
                isLeftChild = false;
            }
            if (current == null) {
                return false;
            }
        }
        if (current.LeftChild == null && current.RightChild == null) {
            if (current === this._root) {
                current = null;
            }
            else {
                if (isLeftChild) {
                    parent.LeftChild = null;
                }
                else {
                    parent.RightChild = null;
                }
            }
            return true;
        }
        if (current.RightChild == null) {
            if (current === this._root) {
                this._root = current.LeftChild;
                return true;
            }
            if (isLeftChild) {
                parent.LeftChild = current.LeftChild;
            }
            else {
                parent.RightChild = current.LeftChild;
            }
            return true;
        }
        if (current.LeftChild == null) {
            if (current === this._root) {
                this._root = current.RightChild;
                return true;
            }
            if (isLeftChild) {
                parent.LeftChild = current.RightChild;
            }
            else {
                parent.RightChild = current.RightChild;
            }
            return true;
        }
        if (current.LeftChild && current.RightChild) {
            const successor = this.getSuccessor(current);
            if (current === this._root) {
                this._root = successor;
            }
            else if (isLeftChild) {
                parent.LeftChild = successor;
            }
            else {
                parent.RightChild = successor;
            }
            successor.LeftChild = current.LeftChild;
        }
        return true;
    }
    deleteTree() {
        this._root = null;
        return true;
    }
}
