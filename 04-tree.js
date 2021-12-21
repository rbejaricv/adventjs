const air = '_';
const tree = '*';
const wood = '#';
const newLine = '\n';

function treeLine(height, n) {
    let side = air.repeat(height - n - 1);
    return side + tree.repeat(n * 2 + 1) + side + newLine;
}

function woodLine(height) {
    let side = air.repeat(height - 1);
    return side + wood + side + newLine + side + wood + side;
}

function createXmasTree(height) {
    let tree = "";

    for (let i = 0; i < height; i++) {
        tree += treeLine(height, i);
    }

    tree += woodLine(height);

    return tree;
}

function main() {
    console.log(createXmasTree(5));
    console.log(createXmasTree(3));
}

if (require.main === module) {
    main();
}