let count_increase = document.getElementById("count")
let count_decrease = document.getElementById("count")
let count_reset = document.getElementById("count")
let count_save = document.getElementById("save")
let count = 0

function INCREASE() {
    count += 1
    count_increase.innerText = count
    if (count > 0) 
        document.getElementById('count').style.color = "blue";
    else if (count == 0)
        document.getElementById('count').style.color = "black";

    
}

function DECREASE() {
    count += -1
    count_decrease.innerText = count
    if (count < 0)
        document.getElementById('count').style.color = "red";
    else if (count == 0)
        document.getElementById('count').style.color = "black";
}

function SAVE() {
    let countStr = count + ", "
    count_save.textContent += countStr
}

function RESET() {
    count = 0
    count_reset.innerText = count
}

function DELETE() {
    countStr = 'save :'
    count_save.textContent = countStr
}

if (document.getElementById('count').value > 0)
    document.getElementById('count').style.color = "blue";










