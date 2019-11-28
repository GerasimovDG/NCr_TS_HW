import { BinaryTree } from "./binary-tree.js";
import { DrawTreeService } from "./draw-tree.js";
const drawTreeService = new DrawTreeService();
const tree = new BinaryTree();
tree.addNode(16, "Apple");
tree.addNode(23, "Juice");
tree.addNode(12, "Banana");
tree.addNode(2, "Tomato");
tree.addNode(13);
tree.addNode(1);
tree.addNode(7);
tree.addNode(3);
tree.addNode(11);
tree.addNode(21);
tree.addNode(25);
tree.addNode(28);
tree.addNode(26);
const node = tree.getRoot();
console.dir("Корень дерева:");
console.dir(node);
console.log(tree);
drawTreeService.drawTree(tree);
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const randomTreeBtn = document.getElementById("randomTreeBtn");
const findBtn = document.getElementById("findBtn");
function addNode() {
    const text = document.getElementsByTagName("input")[0];
    const val = text.value;
    tree.addNode(+val);
    drawTreeService.drawTree(tree);
}
function deleteNode() {
    const text = document.getElementsByTagName("input")[0];
    const val = text.value;
    const value = parseFloat(val);
    tree.deleteNode(value);
    drawTreeService.drawTree(tree);
}
function findNode() {
    const text = document.getElementsByTagName("input")[0];
    const val = text.value;
    const value = parseFloat(val);
    const searchNode = tree.searchNode(value);
    if (searchNode) {
        console.log((searchNode.Data));
        drawTreeService.drawData(searchNode);
    }
    else {
        console.log("Нет такой вершины!");
        drawTreeService.drawData(null);
    }
}
function delTree() {
    drawTreeService.removeTree(tree);
    drawTreeService.deleteTree(tree);
}
function randGenerateTree() {
    delTree();
    for (let i = 0; i < 10; i++) {
        const randNumb = Math.floor(Math.random() * (40 - 1 + 1)) + 1;
        tree.addNode(randNumb);
    }
    drawTreeService.drawTree(tree);
}
// обработка нажатий на кнопки
addBtn.addEventListener("click", addNode);
deleteBtn.addEventListener("click", deleteNode);
randomTreeBtn.addEventListener("click", randGenerateTree);
findBtn.addEventListener("click", findNode);
