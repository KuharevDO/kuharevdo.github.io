function checkFuncton(){
    var checkBox = document.getElementById("checkbox");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
    text.style.display = "none";
    }
}
var form = document.querySelector('send');
