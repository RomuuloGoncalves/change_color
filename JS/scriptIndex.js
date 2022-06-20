const button = document.getElementById("btn-change")

button.addEventListener("click", function(){
    let colorHeader = document.getElementById("header").value
    let colorMain = document.getElementById("main").value
    let colorFooter = document.getElementById("footer").value

    const transition = "1s"

    document.getElementById("header-tag").style.transition = transition
    document.getElementById("header-tag").style.backgroundColor = colorHeader

    document.getElementById("main-tag").style.transition = transition
    document.getElementById("main-tag").style.backgroundColor = colorMain

    document.getElementById("footer-tag").style.transition = transition
    document.getElementById("footer-tag").style.backgroundColor = colorFooter

})

addEventListener("mousemove", function(){
    let colorHeader = document.getElementById("header").value
    let colorMain = document.getElementById("main").value
    let colorFooter = document.getElementById("footer").value

    document.getElementById("preViewHeader").style.backgroundColor = colorHeader
    document.getElementById("preViewMain").style.backgroundColor = colorMain
    document.getElementById("preViewFooter").style.backgroundColor = colorFooter

})

