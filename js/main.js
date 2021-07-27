var drct = false
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("button", ev.target.id);
}
// a variable to prevent alert function from working while it is full
var isBusy = false;
function drop(ev) {
    isBusy = true;
    ev.preventDefault();
    var data = ev.dataTransfer.getData("button");
    ev.target.appendChild(document.getElementById(data));
}

function alertDrop() {
    //if isBusy is false then alert won't work 
    if (isBusy == false)
        alert("Drag and drop buttons here however you want");
}
function widenOn() {
    drct = !drct
    var circle = document.getElementById("fCircle")
    var switchBtn = document.getElementById("fSwitch-btn")
    var container = document.getElementById("toWiden")
    var header = document.getElementsByClassName("fHeader")[0]

    if (drct) {
        circle.setAttribute("style", "float:right")
        switchBtn.setAttribute("style", "background:lightblue")
        container.setAttribute("class", "container-fluid")
        header.setAttribute('style', 'padding:0px 15px')
    }
    else {
        circle.setAttribute("style", "float:left")
        switchBtn.setAttribute("style", "background:grey")
        container.setAttribute("class", "container")
        header.setAttribute('style', 'padding:15px')
    }
}




var rowSize = 25;
document.onkeydown = function (event) {
    if (event.key == "Enter") {
        text.rows = rowSize
        rowSize++
    }
}



function save() {
    //if file name is not " " then prompt will stop 
    //otherwise it will stop and accept the name of the file
    var isAccepted = false
    while (!isAccepted) {

        var title = prompt("For demo enter the name of the file ")
        if (title != '') {
            isAccepted = true
        }
    }
}
//to split text area in index.html
var isSplit = false
function deleteText() {
    var text = document.getElementsByClassName("fTextArea")[0]
    if (isSplit == false) {
        text.value = " "
    }
    else {
        text.value = " "
        document.getElementsByClassName("fTextArea")[1].value = " "
    }
}


function reset() {
    window.location.href = ""
}
var editedText, hLightedText;

//functions to edit style
function setTextAlign(id) {
    var text = document.getElementsByClassName("fTextArea")[0]
    text.style.textAlign = id.value

    if (isSplit == true) {
        document.getElementsByClassName("fTextArea")[1].style.textAlign = id.value
    }
}
function setTextCase(id) {
    var text = document.getElementsByClassName("fTextArea")[0]
    text.style.textTransform = id.value

    if (isSplit == true) {
        document.getElementsByClassName("fTextArea")[1].style.textTransform = id.value
    }
}
function setFontSize(id) {
    var text = document.getElementsByClassName("fTextArea")[0]
    text.style.fontSize = id.value
    if (isSplit == true) {
        document.getElementsByClassName("fTextArea")[1].style.fontSize = id.value
    }
}
function setTextColor(id) {
    var text = document.getElementsByClassName("fTextArea")[0]
    text.style.color = id.value
    if (isSplit == true) {
        document.getElementsByClassName("fTextArea")[1].style.color = id.value
    }
}
function setBgColor(id) {
    var text = document.getElementsByClassName("fTextArea")[0]
    text.style.background = id.value

    if (isSplit == true) {
        document.getElementsByClassName("fTextArea")[1].style.background = id.value
    }
}
function setWordSpacing() {
    document.getElementById("fSetWordSpacing").onkeydown = function (event) {
        if (event.key == "Enter") {
            var value2 = document.getElementById("fSetWordSpacing").value
            text.style.wordSpacing = value2 + "px"
        }
    }
}
function setFontFamily(id) {
    var text = document.getElementsByClassName("fTextArea")[0]
    text.style.fontFamily = id.value
}