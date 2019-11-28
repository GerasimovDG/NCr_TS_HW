interface INode<T> {
    Key: number;
    Data: T;
    LeftChild: INode<T>;
    RightChild: INode<T>;
}

export class MyNode<T> implements INode<T> {
    private data: T;
    readonly key: number;
    private left: MyNode<T>;
    private right: MyNode<T>;

    constructor(key: number, data?: T) {
        this.key = key;
        this.left = null;
        this.right = null;
        data ? this.data = data : this.data = null;
    }

    get Key(): number {
        return this.key;
    }

    get Data(): T {
        if (this.data) {
            return this.data;
        }
        return null;
    }
    set Data(data: T) {
        this.data = data;
    }
    get LeftChild(): MyNode<T> {
        return this.left;
    }
    set LeftChild(left: MyNode<T>) {
        this.left = left;
    }
    get RightChild(): MyNode<T> {
        return this.right;
    }
    set RightChild(right: MyNode<T>) {
        this.right = right;
    }

}
