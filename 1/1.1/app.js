let num;
num = prompt("Введите число:");
if (isNaN(num) || num == "") {
    console.log("Введенная вами информация не является числом");
} else {
    num = Math.abs(num);
    let i = 1;
    while (num > 10) {
        num = Math.floor(num / 10);
        i++;
    }
    console.log("В введенном вами числе " + i + " разрядов, первая цифра — " + num);
}