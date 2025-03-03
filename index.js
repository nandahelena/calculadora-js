let inputText = document.getElementById("input")

function insert(number){
    let lastChar = inputText.innerHTML.slice(-1)
    if (inputText.innerHTML === "" && ["+", "*", "/"].includes(number)) {
        return;
    }
    if (["+", "-", "*", "/"].includes(lastChar) && ["+", "*", "/"].includes(number)) {
        return;
    }
    inputText.innerHTML += number
}

let btnClear = document.getElementById("clearInput")
btnClear.addEventListener("click", function(){
    inputText.innerHTML = ""
})

let btnResult = document.getElementById("showResult")
btnResult.addEventListener("click", function(){
    if(inputText.innerHTML){
        inputText.innerHTML = eval(inputText.innerHTML)
    }
})