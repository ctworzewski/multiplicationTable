const multiplyBoard = [];
let size = 10;

for (let i = 0; i <=size; i++) {
    let row = [];
    for (let j = 0; j <=size; j++) {
        row.push(i*j);
    }
    multiplyBoard.push(row);
}
console.log(multiplyBoard);
console.table(multiplyBoard);