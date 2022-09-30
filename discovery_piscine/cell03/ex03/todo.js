var counter = 0;
const mainDiv = document.getElementById("md");

window.onload = () => {
    const mainDiv = document.getElementById("md");
    const listValues = JSON.parse(window.localStorage.getItem('list')) || [];
    var valueCount = listValues.length;
    for(var i = 0; i < valueCount; i++){
        createDiv(listValues[i]);
    }

}

function createDiv(textValue) {

    const mainDiv = document.getElementById("md");    
        var height = document.getElementById("md").offsetHeight;
        /*Increasing height per new div created*/
        mainDiv.style.height = height + 100 + "px";
        var div = document.createElement('div');
        counter++;
        mainDiv.append(div);
        div.classList.add("newDiv");

        div.onclick = function(){
            counter--;
            if(confirm("Are you sure?")){
                this.parentElement.removeChild(this)
                if (counter > 4 && counter < 6)
                    mainDiv.style.height = "40vh";
                else if (counter < 4 && counter > 2)
                    mainDiv.style.height = "20vh";
                else if (counter < 1)
                    mainDiv.style.height = "15vh";
            }
            storeValLocal();
        }
            div.style.display = "flex";
            div.style.height = "40px";
            div.style.width = "50vw";
            div.style.backgroundColor = "transparent";
            div.style.border = "solid red 1px";
            div.style.boxShadow = "2px 2px 10px red";
            div.style.borderRadius = "16px";
            div.style.paddingTop = "10px";
            div.style.paddingLeft = "20px";
            div.style.color = "white";
            div.style.fontFamily = "'Space Mono', monospace";
            div.innerText = textValue;
            document.getElementById("inputVal").value = "";
}

function addTask() {
    var textValue = document.getElementById("inputVal").value;
    var i = textValue.length;
    /* function will only run if the length is over 0 (not empty string) */
    if (i > 0) {

        createDiv(textValue);
        /* Storing page data in local storage */
        storeValLocal();
    }
}

function storeValLocal() {
    const mainDiv = document.getElementById("md");
    const varArray = [];

    for (const element of mainDiv.children) {
        varArray.push(element.textContent);
    }
    
    window.localStorage.setItem('list', JSON.stringify(varArray));
} 
