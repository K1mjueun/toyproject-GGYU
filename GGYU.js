
// start-page
const speechBubble = document.querySelector(".speech-bubble");

setTimeout (function() {
  speechBubble.style.opacity = 1;
},2000);

const startP = document.getElementById("start-page");
const mainP = document.getElementById("main-page");
const hamonEarth = document.querySelector(".ham-on-earth");

// 화면 전환 하기
let displayAppear = [
  {opacity: 0.8},
  {opacity: 0.9},
  {opacity: 1},
];

  let displayChangeTime = {
    duration: 500,
    iterations: 1
  };

  function displayChange(element, disappearTarget, appearTarget) {
    element.addEventListener('click', function() {
      disappearTarget.style.display = "none";
      appearTarget.style.display = "flex";
      appearTarget.animate(displayAppear,displayChangeTime);
      appearTarget.style.opacity = 1;
    });
  };
//

  displayChange(hamonEarth,startP,mainP);