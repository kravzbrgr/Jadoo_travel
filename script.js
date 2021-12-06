document.addEventListener('DOMContentLoaded', onLoad);
function onLoad (){
  document.getElementById('color').onclick = changeColor; 
  const element = document.getElementById("best_destinations");
  function changeColor() {  
    element.classList.toggle("mystyle");   
  }
  const services = document.getElementsByClassName("active");
  const actives = document.getElementsByClassName('focus');
  for (i = 0; services.length > i; i++) {
    services[i].onclick = function() {
      let currentActive = actives[0];
      if (currentActive == this){
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
}

