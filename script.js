import colors from "./backColor.js";
// console.log(colors);

const wrapper = document.querySelector("#wrapper");

let arr = [];
let arr1 = [];

window.addEventListener("click", function (e) {
    if(!wrapper || colors.length===0) return;
  const para =document.createElement("p");
  para.className = "para";

  const x = e.clientX;
  const y = e.clientY;

  para.style.left = `${x - 10}px`;
  para.style.top = `${y - 10}px`;

  const RndColor = colors[getRandomIndex()];
  para.style.backgroundColor = RndColor.backgroundColor;

//   console.log(para);
  wrapper.append(para);
  arr.push(para);
  arr1 = [];
});

function getRandomIndex() {
  return Math.floor(Math.random() * colors.length);
}
// console.log(getRandomIndex());
// getRandomIndex()

window.addEventListener("keydown", function (e) {
    if (!wrapper) return;
  if (e.ctrlKey && e.key === "z") {
    const lastElement = arr.pop();
    if(lastElement){

        wrapper.removeChild(lastElement);
        arr1.push(lastElement);
    }
  }

  if (e.ctrlKey && e.key === "y") {
    const redo = arr1.pop();
    if(redo){

        wrapper.appendChild(redo);
        arr.push(redo);
    }
  }

  if (e.key === "r" ) {
    wrapper.innerHTML = "";
    arr = [];
    arr1 = [];
  }
});
