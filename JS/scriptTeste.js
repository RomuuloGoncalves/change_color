const button = document.getElementById("btn-change")

button.addEventListener("click", function (){
    let color = document.getElementById("color").value 
    document.getElementById("div-alter").style.backgroundColor = color
    document.getElementById("sim").innerHTML = color
})
