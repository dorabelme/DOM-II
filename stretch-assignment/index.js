// import TweenLite from "gsap";

const blockRed = document.querySelector(".block--red");
blockRed.style.order = 0;

const blockBlue = document.querySelector(".block--blue");
blockBlue.style.order = 1;

const blockGreen = document.querySelector(".block--green");
blockGreen.style.order = 2;

const blockPink = document.querySelector(".block--pink");
blockPink.style.order = 3;

const blockGray = document.querySelector(".block--gray");
blockGray.style.order = 4;

const blocks = document.querySelectorAll(".block");

blocks.forEach(block => (block.style.marginLeft = "10px"));

blocks.forEach(block =>
  block.addEventListener("click", event => {
    console.log("click");

    //Get all blocks above the clicked block, because we'll need to re-rank them
    const blocksToReRank = Array.from(blocks).filter(
      b => b.style.order < block.style.order
    );
    
    block.style.order = 0;

    blocksToReRank.forEach(b => b.style.order++);
  })
);

var i = null;

const speedFactor = 0.1;
const moveSpeed = 20;
const maxDistance = 1000;
const minDistance = 10;
const oneMillisecond = 1000;

blocks.forEach(block => {
  block.addEventListener("mousedown", event => {
    console.log("down");

    if (i !== null) {
        clearInterval(i);
    }

    i = setInterval(function() {
      currentMargin = parseInt(block.style.marginLeft, 10);
      toMargin = Math.min(currentMargin + moveSpeed, maxDistance);
      toMarginPx = toMargin.toString() + "px";

      TweenLite.to(block, speedFactor, { marginLeft: toMarginPx });
    }, oneMillisecond * speedFactor);
  });

  block.addEventListener("mouseup", event => {
    console.log("up");

    if (i !== null) {
      clearInterval(i);
    }

    i = setInterval(function() {
      currentMargin = parseInt(block.style.marginLeft, 10);

      if (currentMargin === 10) {
        clearInterval(i);
        i = null;
      } else {
        toMargin = Math.max(currentMargin - moveSpeed, minDistance);
        toMarginPx = toMargin.toString() + "px";

        TweenLite.to(block, speedFactor, { marginLeft: toMarginPx });
      }
    }, oneMillisecond * speedFactor);
  });
});
