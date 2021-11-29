document.addEventListener("load", myScript);
myScript = function(){

document.getElementById('color').onclick = changeColor; 
let element = document.getElementById("best_destinations");
function changeColor() {  
            element.classList.toggle("mystyle");   
    }

let services = document.getElementsByClassName("active");
let actives = document.getElementsByClassName('focus');
for (i = 0; services.length > i; i++) {
  services[i].onclick = function() {
    let currentActive = actives[0];
    if (currentActive !== this) {
      return;
    }
    if (currentActive){
      currentActive.classList.remove("focus");
    }
    if (currentActive !== this) {
        this.classList.add("focus");
      }
    }
}

let boxes = document.getElementsByClassName("Services_box");
let box_actives = document.getElementsByClassName('box_focus');
for (i = 0; boxes.length > i; i++) {
  boxes[i].onclick = function() {
    let currentBox = box_actives[0];
    if (currentBox !== this){
      return;
    }
    if (currentBox){
    currentBox.classList.remove("box_focus");
    }
    if (currentBox !== this) {  
      this.classList.add("box_focus");  
    }  
  }
}
}