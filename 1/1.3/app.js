let arr = [[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]];
let sum = 0;
for (let i of arr) {
    for (j of i){
        sum += j ** 2;
    }
}
console.log("Сумма квадратов элементов массива равна " + sum);