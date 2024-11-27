let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");
let inputs = document.getElementsByTagName("input");
let count;

let hours, minutes, seconds;

function toggleInputsReadonly(isReadonly) {
  [...inputs].forEach((input) => {
    input.readOnly = isReadonly; 
  });
}

function formatNumber(num) {
  return num < 10 ? `0${num}` : num;
}

function disablePlay(disabled) {
  play.disabled = disabled;
}

play.addEventListener("click", () => {
  hours = parseInt(document.querySelector(".h").value);
  minutes = parseInt(document.querySelector(".m").value);
  seconds = parseInt(document.querySelector(".s").value);
  let time = (hours*3600) + (minutes*60) + seconds;
  
  disablePlay(true);
  toggleInputsReadonly(true);

  count = setInterval(() => {
    document.querySelector("h1").innerText = "Welcome To BMO Timer!";
    if (time === 0) {
      clearInterval(count);
      disablePlay(false);
      document.querySelector("h1").innerText = "Time Is Up!";
    } else {
      time --;
      hours = document.querySelector(".h").value = formatNumber(Math.floor(time/3600));
      minutes = document.querySelector(".m").value = formatNumber(Math.floor((time % 3600) / 60));
      seconds = document.querySelector(".s").value = formatNumber(Math.floor(time % 60));
    }
  },1000);
});

pause.addEventListener("click", function () {
  clearInterval(count);
  toggleInputsReadonly(false);
  disablePlay(false);
})


reset.addEventListener("click", function () {
  clearInterval(count);
  disablePlay(false);
  toggleInputsReadonly(false);
  document.querySelector("h1").innerText = "Welcome To BMO Timer!";
  for (let i = 0; i<3; i++)
    document.getElementsByTagName("input")[i].value = "00";
})


let clBtn = document.getElementsByClassName("cl")[0];

let f = true;

clBtn.onclick = function () {
  if(f){
    f = false
    let face = document.getElementById("face");
    face.style.cssText = "display: none";
  } else {
    f = true;
    let face = document.getElementById("face");
    face.style.cssText = "display: block";
  }

};

console.log([...document.getElementsByTagName("input")].forEach((i) => {
  i.attributes = reasonl
}))
