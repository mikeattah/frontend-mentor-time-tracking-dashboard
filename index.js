const dailySchedule = document.querySelector("#daily-schedule");
const weeklySchedule = document.querySelector("#weekly-schedule");
const monthlySchedule = document.querySelector("#monthly-schedule");

const workCurrent = document.querySelector("#work-current");
const workPrevious = document.querySelector("#work-previous");

const playCurrent = document.querySelector("#play-current");
const playPrevious = document.querySelector("#play-previous");

const studyCurrent = document.querySelector("#study-current");
const studyPrevious = document.querySelector("#study-previous");

const exerciseCurrent = document.querySelector("#exercise-current");
const exercisePrevious = document.querySelector("#exercise-previous");

const socialCurrent = document.querySelector("#social-current");
const socialPrevious = document.querySelector("#social-previous");

const selfCareCurrent = document.querySelector("#self-care-current");
const selfCarePrevious = document.querySelector("#self-care-previous");

function selectSchedule(type) {
  fetch("./data.json", { mode: "no-cors" })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (type === "Daily") {
        dailySchedule.style.color = "#fff";
        weeklySchedule.style.color = "hsl(236, 100%, 87%)";
        monthlySchedule.style.color = "hsl(236, 100%, 87%)";

        workCurrent.textContent = data[0].timeframes.daily.current + "hrs";
        workPrevious.textContent =
          "Yesterday - " + data[0].timeframes.daily.previous + "hrs";
        playCurrent.textContent = data[1].timeframes.daily.current + "hrs";
        playPrevious.textContent =
          "Yesterday - " + data[1].timeframes.daily.previous + "hrs";
        studyCurrent.textContent = data[2].timeframes.daily.current + "hrs";
        studyPrevious.textContent =
          "Yesterday - " + data[2].timeframes.daily.previous + "hrs";
        exerciseCurrent.textContent = data[3].timeframes.daily.current + "hrs";
        exercisePrevious.textContent =
          "Yesterday - " + data[3].timeframes.daily.previous + "hrs";
        socialCurrent.textContent = data[4].timeframes.daily.current + "hrs";
        socialPrevious.textContent =
          "Yesterday - " + data[4].timeframes.daily.previous + "hrs";
        selfCareCurrent.textContent = data[5].timeframes.daily.current + "hrs";
        selfCarePrevious.textContent =
          "Yesterday - " + data[5].timeframes.daily.previous + "hrs";
      } else if (type === "Weekly") {
        weeklySchedule.style.color = "#fff";
        dailySchedule.style.color = "hsl(236, 100%, 87%)";
        monthlySchedule.style.color = "hsl(236, 100%, 87%)";

        workCurrent.textContent = data[0].timeframes.weekly.current + "hrs";
        workPrevious.textContent =
          "Last Week - " + data[0].timeframes.weekly.previous + "hrs";
        playCurrent.textContent = data[1].timeframes.weekly.current + "hrs";
        playPrevious.textContent =
          "Last Week - " + data[1].timeframes.weekly.previous + "hrs";
        studyCurrent.textContent = data[2].timeframes.weekly.current + "hrs";
        studyPrevious.textContent =
          "Last Week - " + data[2].timeframes.weekly.previous + "hrs";
        exerciseCurrent.textContent = data[3].timeframes.weekly.current + "hrs";
        exercisePrevious.textContent =
          "Last Week - " + data[3].timeframes.weekly.previous + "hrs";
        socialCurrent.textContent = data[4].timeframes.weekly.current + "hrs";
        socialPrevious.textContent =
          "Last Week - " + data[4].timeframes.weekly.previous + "hrs";
        selfCareCurrent.textContent = data[5].timeframes.weekly.current + "hrs";
        selfCarePrevious.textContent =
          "Last Week - " + data[5].timeframes.weekly.previous + "hrs";
      } else if (type === "Monthly") {
        monthlySchedule.style.color = "#fff";
        dailySchedule.style.color = "hsl(236, 100%, 87%)";
        weeklySchedule.style.color = "hsl(236, 100%, 87%)";

        workCurrent.textContent = data[0].timeframes.monthly.current + "hrs";
        workPrevious.textContent =
          "Last Month - " + data[0].timeframes.monthly.previous + "hrs";
        playCurrent.textContent = data[1].timeframes.monthly.current + "hrs";
        playPrevious.textContent =
          "Last Month - " + data[1].timeframes.monthly.previous + "hrs";
        studyCurrent.textContent = data[2].timeframes.monthly.current + "hrs";
        studyPrevious.textContent =
          "Last Month - " + data[2].timeframes.monthly.previous + "hrs";
        exerciseCurrent.textContent =
          data[3].timeframes.monthly.current + "hrs";
        exercisePrevious.textContent =
          "Last Month - " + data[3].timeframes.monthly.previous + "hrs";
        socialCurrent.textContent = data[4].timeframes.monthly.current + "hrs";
        socialPrevious.textContent =
          "Last Month - " + data[4].timeframes.monthly.previous + "hrs";
        selfCareCurrent.textContent =
          data[5].timeframes.monthly.current + "hrs";
        selfCarePrevious.textContent =
          "Last Month - " + data[5].timeframes.monthly.previous + "hrs";
      }
    })
    .catch((error) => console.error(error));
}
