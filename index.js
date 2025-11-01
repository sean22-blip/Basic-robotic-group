const greenBTn = document.getElementById("greenBtn");
const yellowBtn = document.getElementById("yellowBtn");
const redBtn = document.getElementById("redBtn");
const p1 = document.getElementById("p1");
const stopBtn = document.getElementById("stopBtn");
window.alert("Give us full mark!");
greenBTn.onclick = function(){
    p1.textContent = "GREEN";
}
yellowBtn.onclick = function(){
    p1.textContent = "YELLOW";
}
redBtn.onclick = function(){
    p1.textContent = "RED"; 
}
stopBtn.onclick = function(){
    p1.textContent = " ";
}