document.getElementById('color').onclick = changeColor; 
let currentColor = "#DF6951";
function changeColor() { 
        if(currentColor == "#DF6951"){ 
            document.getElementById("best_destinations").style.color = "green";
           currentColor = "green";
        } else {
            document.getElementById("best_destinations").style.color = "#DF6951";
            currentColor = "#DF6951";
        } 
    }