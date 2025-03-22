let save = document.createElement("fieldset");
save.innerHTML = "<legend class='legend'>- Сохраненные данные -</legend><div class='info'>Фамилия:</div><div id='outputSurname'>—</div><div class='info'>Имя:</div><div id='outputName'>—</div><div class='info'>Электронная почта:</div><div id='outputEmail'>—</div><div class='info'>Телефон:</div><div id='outputPhone'>—</div>";

document.querySelector('form').onsubmit = function (event) {
    event.preventDefault();
    if (document.querySelectorAll('fieldset').length == 1) {
        document.querySelector('fieldset').after(save);
    }
    if (inputSurname.value != "") {
        outputSurname.innerHTML = inputSurname.value;
    } else {
        outputSurname.innerHTML = "—";
    }
    inputSurname.value = "";
    if (inputName.value != "") {
        outputName.innerHTML = inputName.value;
    } else {
        outputName.innerHTML = "—";
    }
    inputName.value = "";
    if (inputEmail.value != "") {
        outputEmail.innerHTML = inputEmail.value;
    } else {
        outputEmail.innerHTML = "—";
    }
    inputEmail.value = "";
    if (inputPhone.value != "") {
        outputPhone.innerHTML = inputPhone.value;
    } else {
        outputPhone.innerHTML = "—";
    }
    inputPhone.value = "";
}

change.onclick = function () {     
    if (this.innerHTML == "Поменять тему на темную") {
        this.innerHTML = "Поменять тему на светлую";
        document.querySelector('body').style = "background-color: #707e92";
        for (let el of document.querySelectorAll('legend')) {
            el.style = "background-color: rgb(0, 0, 0); color:#c4d7ee"; 
        }
        save.querySelector('legend').style = "background-color: rgb(0, 0, 0); color:#c4d7ee";
        for (let el of document.querySelectorAll('fieldset')) {
            el.style = "border: 3px solid rgb(0, 0, 0); color:rgb(0, 0, 0)"; 
        }
        save.style = "border: 3px solid rgb(0, 0, 0); color:rgb(0, 0, 0)"; 
        for (let el of document.querySelectorAll('button')) {
            el.style = "background-color: rgb(0, 0, 0); color:#c4d7ee"; 
        }
    } else {
        this.innerHTML = "Поменять тему на темную";
        document.querySelector('body').style = "background-color: #c4d7ee";
        for (let el of document.querySelectorAll('legend')) {
            el.style = "background-color: #707e92; color:rgb(255, 255, 255)"; 
        }
        save.querySelector('legend').style = "background-color: #707e92; color:rgb(255, 255, 255)";
        for (let el of document.querySelectorAll('fieldset')) {
            el.style = "border: 3px solid #707e92; color:#707e92"; 
        }
        save.style = "border: 3px solid #707e92; color:#707e92";
        for (let el of document.querySelectorAll('button')) {
            el.style = "background-color: #707e92; color:#ffffff"; 
        }
    }
}