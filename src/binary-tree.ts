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
            if (numb < current.getKey()) {
                current = current.getLeft();
                if (current == null) {
                    parent.setLeft(newNode);
                    return;
                }
            } else {
                current = current.getRight();
                if (current == null) {
                    parent.setRight(newNode);
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
        if (key === tmpNode.getKey()) {
            return this._root;
        }
        while (key !== tmpNode.getKey()) {
            key > tmpNode.getKey() ? tmpNode = tmpNode.getRight() : tmpNode = tmpNode.getLeft();
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
        let current: MyNode<T> = successor.getRight();
        while (current != null) {
            parentSuccessor = successor;
            successor = current;
            current = current.getLeft();
        }
        if (successor !== deleteNode.getRight()) {
            parentSuccessor.setLeft(successor.getRight());
            successor.setRight(deleteNode.getRight());
            successor.setLeft(deleteNode.getLeft());
        }
        return successor;
    }

    // удаление вершины
    deleteNode(key: number): boolean {
        let current: MyNode<T> = this._root;
        let parent: MyNode<T> = current;
        let isLeftChild: boolean = false;

        while (current.getKey() !== key) {
            parent = current;
            if (key < current.getKey()) {
                current = current.getLeft();
                isLeftChild = true;
            } else {
                current = current.getRight();
                isLeftChild = false;
            }
            if (current == null) {
                return false;
            }
        }
        if (current.getLeft() == null && current.getRight() == null) {
            if (current === this._root) {
                current = null;
            } else {
                if (isLeftChild) {
                    parent.setLeft(null);
                } else {
                    parent.setRight(null);
                }
            }
            return true;
        }
        if (current.getRight() == null) {
            if (current === this._root) {
                this._root = current.getLeft();
                return true;
            }
            if (isLeftChild) {
                parent.setLeft(current.getLeft());
            } else {
                parent.setRight(current.getLeft());
            }
            return true;
        }
        if (current.getLeft() == null) {
            if (current === this._root) {
                this._root = current.getRight();
                return true;
            }
            if (isLeftChild) {
                parent.setLeft(current.getRight());
            } else {
                parent.setRight(current.getRight());
            }
            return true;
        }
        if (current.getLeft() && current.getRight()) {
            const successor: MyNode<T> = this.getSuccessor(current);
            if (current === this._root) {
                this._root = successor;
            } else if (isLeftChild) {
                parent.setLeft(successor);
            } else {
                parent.setRight(successor);
            }
            successor.setLeft(current.getLeft());
        }
        return true;
    }

    deleteTree(): boolean {
        this._root = null;
        return true;
    }
}
