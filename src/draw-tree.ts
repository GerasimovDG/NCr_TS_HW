import { BinaryTree } from "./binary-tree.js";
import { MyNode } from "./my-node.js";

export class DrawTreeService<T> {
    drawTree( tree: BinaryTree<T>): void {
        this.removeTree(tree);

        this.drawRecLine(tree._root, 300, 1, "center", 0);
        this.drawRec(tree._root, 300, 1, "center", 0);
    }
    removeTree( tree: BinaryTree<T>): void {
        const line_remove = document.getElementsByClassName("figure")[0];
        line_remove.remove();
        const intoDiv = document.getElementById("container");
        const div = document.createElement("div");
        div.className = "figure";
        intoDiv.appendChild(div);
    }

    deleteTree(tree: BinaryTree<T>): void {
        tree.deleteTree();
    }

    drawData(node: MyNode<T>): void {
        const intoDiv = document.getElementsByClassName("data");
        const divs = document.getElementsByClassName("data__info");
        divs[0].remove();
        const div = document.createElement("div");
        div.className = "data__info";
        if (!node) {
            div.innerHTML = "Нет такой вершины";
            intoDiv[0].appendChild(div);
            return;
        }
        node.getData()
            ? div.innerHTML = "Key: " + node.getKey().toString() + "<br>Data: " + JSON.stringify(node.getData())
            : div.innerHTML = "Key: " + node.getKey().toString() + "<br>Data: " + "Пусто";
        intoDiv[0].appendChild(div);
    }


    draw(node: MyNode<T>, isLeft: string, x: number, level: number): void {

        const intoDiv = document.getElementsByClassName("figure");
        const div = document.createElement("div");

        const length = 50;
        div.className = "figure__element";
        div.innerHTML = "<div class='text'>" + node.getKey().toString() + "</div>";
        if (isLeft === "left") {
            div.style.left = x - 20 + "px";
            div.style.top = level * length + "px";
        } else if (isLeft === "right") {
            div.style.left = x - 20 + "px";
            div.style.top = level * length  + "px";
        } else {
            div.style.left = -20 + "px";
            div.style.top = level * length + "px";
        }
        intoDiv[0].appendChild(div);
    }
    drawLine(node: MyNode<T>, isLeft: string, x: number, level: number, length: number): void {
        const intoDiv = document.getElementsByClassName("figure");
        const line = document.createElement("div");
        line.className = "figure__line";
        const lengthTop = 50;
        if (isLeft === "left") {
            line.style.left = x + 2 + "px";
            line.style.top = level * lengthTop + 2 + "px";
            line.style.width = length > lengthTop / 2 ? length + "px" : lengthTop / 2 + "px";
            line.style.transformOrigin = "left bottom";
            line.style.transform = `rotate(${-15 * (level - 1) }deg)`;
            intoDiv[0].appendChild(line);
        } else if (isLeft === "right") {
            line.style.left = x + "px";
            line.style.top = level * lengthTop + "px";
            line.style.width = length > lengthTop / 2 ? length + "px" : lengthTop / 2 + "px";
            line.style.transformOrigin = "0 100%";
            line.style.transform = `rotate(${-180 + 15 * (level - 1)}deg)`;
            intoDiv[0].appendChild(line);
        }
    }
    drawRec(node: MyNode<T>, length: number, level: number,  isLeft: string, x: number): void {
        this.draw(node, isLeft, x, level);
        if (node.getLeft()) {
            x -= length / 2;
            this.drawRec(node.getLeft(), length / 2, level + 1, "left", x);
            x += length / 2;
        }

        if (node.getRight()) {
            x += length / 2;
            this.drawRec(node.getRight(), length / 2, level + 1, "right", x);
        }
    }
    drawRecLine(node: MyNode<T>, length: number, level: number,  isLeft: string, x: number): void {
        this.drawLine(node, isLeft, x, level, length);
        if (node.getLeft()) {
            x -= length / 2;
            this.drawRecLine(node.getLeft(), length / 2, level + 1, "left", x);
            x += length / 2;
        }

        if (node.getRight()) {
            x += length / 2;
            this.drawRecLine(node.getRight(), length / 2, level + 1, "right", x);
        }
    }
}


