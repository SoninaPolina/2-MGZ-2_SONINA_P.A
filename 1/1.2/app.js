let str;
str = prompt("Введите строку:");
if (str != "") {
    console.log("Каждый второй символ строки, если считать с начала и выводить их в обратном порядке:");
    for (let i = str.length - 1; i > 0; i--) {
        if (i % 2 == 1) {
        console.log(str[i]);
        }
    }
    console.log("Каждый второй символ строки, если считать с конца:");
    for (let i = str.length-2; i >= 0; i -= 2) {
        console.log(str[i]);
    }
}