const dispaly = document.querySelector(".display");

document.querySelectorAll('.digitstop button')
.forEach( button => button.addEventListener('clic', digitPressed));

document.querySelectorAll('.digitmidle button')
.forEach( button => button.addEventListener('clic', digitPressed));

function digitPressed(ev) {
   dispaly.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
.forEach( button => button.addEventListener('clic', operPressed));

document.querySelectorAll('.opers1 button')
.forEach( button => button.addEventListener('clic', operPressed));


function operPressed(ev) {
    dispaly.value += ev.target.innerText;
 }

 document.querySelector(".eq").addEventListener("click", calculate);
  
 function calculate() {
     dispaly.value = eval(display.value);
 }