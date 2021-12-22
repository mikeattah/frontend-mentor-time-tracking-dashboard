const workCurrent = document.querySelector(".work-current");
const workPrevious = document.querySelector(".work-previous");
const playCurrent = document.querySelector(".play-current");
const playPrevious = document.querySelector(".play-previous");
const studyCurrent = document.querySelector(".study-current");
const studyPrevious = document.querySelector(".study-previous");
const exerciseCurrent = document.querySelector(".exercise-current");
const exercisePrevious = document.querySelector(".exercise-previous");
const socialCurrent = document.querySelector(".social-current");
const socialPrevious = document.querySelector(".social-previous");
const selfCareCurrent = document.querySelector(".self-care-current");
const selfCarePrevious = document.querySelector(".self-care-previous");

const selectSchedule = (type) => {
  if (type === "Daily") {
    fetch(./data.json)
  }
};
