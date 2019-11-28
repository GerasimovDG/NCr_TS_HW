import { MyNode } from "./my-node.js";

export class BinaryTree<T> {
    _root: MyNode<T> = null;
    constructor(numb?: number) {
        if (numb) {
            this._root = new MyNode<T>(numb);
        }
    }

    // добавление вершины
    addNode(numb: number, data?: T): void {
        let newNode: MyNode<T>;
        data ? newNode = new MyNode<T>(numb, data) : newNode = new MyNode<T>(numb);
        let current: MyNode<T> = this._root;
        let parent: MyNode<T>;
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
            } else {
                current = current.RightChild;
                if (current == null) {
                    parent.RightChild = newNode;
                    return;
                }
            }
        }
    }

    // получить корень дерева
    getRoot(): MyNode<T> {
        return this._root;
    }

    // поиск по ключу
    searchNode(key: number): MyNode<T> {
        let tmpNode: MyNode<T> = this._root;
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
    getSuccessor(deleteNode: MyNode<T>): MyNode<T> {
        let parentSuccessor: MyNode<T> = deleteNode;
        let successor: MyNode<T> = deleteNode;
        let current: MyNode<T> = successor.RightChild;
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
    deleteNode(key: number): boolean {
        let current: MyNode<T> = this._root;
        let parent: MyNode<T> = current;
        let isLeftChild: boolean = false;

        while (current.Key !== key) {
            parent = current;
            if (key < current.Key) {
                current = current.LeftChild;
                isLeftChild = true;
            } else {
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
            } else {
                if (isLeftChild) {
                    parent.LeftChild = null;
                } else {
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
            } else {
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
            } else {
                parent.RightChild = current.RightChild;
            }
            return true;
        }
        if (current.LeftChild && current.RightChild) {
            const successor: MyNode<T> = this.getSuccessor(current);
            if (current === this._root) {
                this._root = successor;
            } else if (isLeftChild) {
                parent.LeftChild = successor;
            } else {
                parent.RightChild = successor;
            }
            successor.LeftChild = current.LeftChild;
        }
        return true;
    }

    deleteTree(): boolean {
        this._root = null;
        return true;
    }
}
