import { BinaryTree } from "./binary-tree";
import { MyNode } from "./my-node";

    export function DrawTree<T>( tree: BinaryTree<T>): void {
        RemoveTree(tree);

        DrawRecLine(tree._root, 300, 1, "center", 0);
        DrawRec(tree._root, 300, 1, "center", 0);
    }
    export function RemoveTree<T>( tree: BinaryTree<T>): void {
        const line_remove = document.getElementsByClassName("inner")[0];
        line_remove.remove();
        const intoDiv = document.getElementById("inner-container");
        const div = document.createElement("div");
        div.className = "inner";
        intoDiv.appendChild(div);
    }

    export function DeleteTree<T>(tree: BinaryTree<T>): void {
        tree.deleteTree();
    }

    export function DrawData<T>(node: MyNode<T>): void {
        const intoDiv = document.getElementsByClassName("data");
        const divs = document.getElementsByClassName("data-info");
        divs[0].remove();
        const div = document.createElement("div");
        div.className = "data-info";
        node.getData()
            ? div.innerHTML = "Key: " + node.getKey().toString() + "<br>Data: " + JSON.stringify(node.getData())
            : div.innerHTML = "Key: " + node.getKey().toString() + "<br>Data: " + "Пусто";
        intoDiv[0].appendChild(div);
    }


    export function Draw<T>(node: MyNode<T>, isLeft: string, x: number, level: number): void {

        const intoDiv = document.getElementsByClassName("inner");
        const div = document.createElement("div");

        const length = 50;
        div.className = "element";
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
    export function DrawLine<T>(node: MyNode<T>, isLeft: string, x: number, level: number, length: number): void {
        const intoDiv = document.getElementsByClassName("inner");
        const line = document.createElement("div");
        line.className = "line";
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
    export function DrawRec<T>(node: MyNode<T>, length: number, level: number,  isLeft: string, x: number): void {
        Draw(node, isLeft, x, level);
        if (node.getLeft()) {
            x -= length / 2;
            DrawRec(node.getLeft(), length / 2, level + 1, "left", x);
            x += length / 2;
        }

        if (node.getRight()) {
            x += length / 2;
            DrawRec(node.getRight(), length / 2, level + 1, "right", x);
        }
    }
    export function DrawRecLine<T>(node: MyNode<T>, length: number, level: number,  isLeft: string, x: number): void {
        DrawLine(node, isLeft, x, level, length);
        if (node.getLeft()) {
            x -= length / 2;
            DrawRecLine(node.getLeft(), length / 2, level + 1, "left", x);
            x += length / 2;
        }

        if (node.getRight()) {
            x += length / 2;
            DrawRecLine(node.getRight(), length / 2, level + 1, "right", x);
        }
    }

