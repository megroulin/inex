import { gsap } from "gsap";

const startScreen = document.querySelector(".start-screen");
const durationScreen = document.querySelector(".duration-screen");
const exerciceScreen = document.querySelector(".exercice-screen");
const exerciceScreenBall = document.querySelector(".exercice-screen div");
const endScreen = document.querySelector(".end-screen");
const durationButton = document.querySelector(".duration-screen button");
const tl = gsap.timeline();

tl.to(startScreen, {
  opacity: 0,
  duration: 2,
  delay: 2,
  onComplete: function () {
    startScreen.style.display = "none";
    durationScreen.style.display = "flex";
  },
});
tl.fromTo(
  durationScreen,
  {
    opacity: 0,
    delay: 2,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

durationButton.addEventListener("click", startExercice);

function startExercice() {
  tl.to(durationScreen, {
    opacity: 0,
    duration: 1,
    delay: 0,
    onComplete: function () {
      durationScreen.style.display = "none";
      exerciceScreen.style.display = "flex";
    },
  });
  tl.fromTo(
    exerciceScreen,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 2,
    }
  );
  tl.to(exerciceScreenBall, {
    scale: 1.5,
    duration: 5,
    delay: 3,
    yoyo: true,
    repeat: 1,
  });
  tl.to(exerciceScreenBall, {
    opacity: 0,
    duration: 2,
    delay: 2,
    onComplete: function () {
      exerciceScreen.style.display = "none";
      endScreen.style.display = "flex";
    },
  });
}
