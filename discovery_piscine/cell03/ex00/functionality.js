function changeColor(){
    const element = document.getElementById("button")
    element.addEventListener("click", changeColor)
   const c = "#" + Math.floor(Math.random()*16777215).toString(16);
   document.body.style.backgroundColor = c;
}