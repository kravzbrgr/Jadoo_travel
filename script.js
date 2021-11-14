document.getElementById('color').onclick = changeColor; 
let element = document.getElementById("best_destinations");
function changeColor() {  
            element.classList.toggle("mystyle");   
    }

let services = document.getElementsByClassName("active");
let actives = document.getElementsByClassName('focus');
for (i = 0; services.length > i; i++) {
  services[i].onclick = function() {
    var currentActive = actives[0];
    if (currentActive)
      currentActive.classList.remove("focus");

    if (currentActive !== this)
      this.classList.add("focus");
  };
}

