const inputWoman = document.querySelector("#gen-w");
const inputMan = document.querySelector("#gen-m");
const btnWoman = document.querySelector(".btn_woman");
const btnMan = document.querySelector(".btn_man");
const age = document.querySelector("#age-1");
const weight = document.querySelector("#weight-1");
const growth = document.querySelector("#growth-1");
const button = document.querySelector(".btn");
const activityMin = document.querySelector("#el-1");
const activityLow = document.querySelector("#el-2");
const activityMiddle = document.querySelector("#el-3");
const activityHigh = document.querySelector("#el-4");
const activityVeryHigh = document.querySelector("#el-5");
const del = document.querySelector(".crest");
const out = document.querySelector("h4");

// смена пола

btnWoman.onclick = () => {
  if (inputWoman.checked) {
    btnWoman.style.backgroundColor = "orange";
    btnMan.style.backgroundColor = "white";
  }
};

btnMan.onclick = () => {
  if (inputWoman.checked) {
    btnWoman.style.backgroundColor = "white";
    btnMan.style.backgroundColor = "orange";
  }
};

// программа

button.onclick = () => {
  if (inputWoman.checked) {
    let n = 10 * +weight.value + 6.25 * +growth.value - 5 * +age.value - 161;

    if (activityMin.checked) {
      out.innerHTML = `Вам необходимо:<br>
       ${Math.round(n * 1.2)}<br>калорий в сутки`;
    }

    if (activityLow.checked) {
      out.innerHTML = `Вам необходимо:<br>
       ${Math.round(n * 1.375)}<br>калорий в сутки`;
    }
    if (activityMiddle.checked) {
      out.innerHTML = `Вам необходимо:<br>
       ${Math.round(n * 1.55)}<br>калорий в сутки`;
    }

    if (activityHigh.checked) {
      out.innerHTML = `Вам необходимо:<br>
      ${Math.round(Math.round(n * 1.725))}<br>калорий в сутки`;
    }
    if (activityVeryHigh.checked) {
      out.innerHTML = `Вам необходимо:<br>
      ${Math.round(n * 1.9)}<br>калорий в сутки`;
    }
    if (weight.value <= 25 || age.value <= 1 || growth.value <= 130) {
      out.innerHTML = `Параметры не соответствуют ожидаемым`;
    }
    // -----------------------------------------------------------------------------------
  }
  if (inputMan.checked) {
    let n = 10 * weight.value + 6.25 * growth.value - 5 * age.value + 5;

    if (activityMin.checked) {
      out.innerHTML = `Вам необходимо:<br>${Math.round(
        n * 1.2
      )}<br>калорий в сутки`;
    }
    if (activityLow.checked) {
      out.innerHTML = `Вам необходимо:<br>${Math.round(
        n * 1.375
      )}<br>калорий в сутки`;
    }
    if (activityMiddle.checked) {
      out.innerHTML = `Вам необходимо:<br>${Math.round(
        n * 1.55
      )}<br>калорий в сутки`;
    }
    if (activityHigh.checked) {
      out.innerHTML = `Вам необходимо:<br>${Math.round(
        n * 1.725
      )}<br>калорий в сутки`;
    }
    if (activityVeryHigh.checked) {
      out.innerHTML = `Вам необходимо:<br>${Math.round(
        n * 1.9
      )}<br>калорий в сутки`;
    }
    if (weight.value <= 25 || age.value <= 1 || growth.value <= 130) {
      out.innerHTML = `Параметры не соответствуют ожидаемым`;
    }
  }
};

// доработки

del.onclick = () => {
  console.log("очищено");
  weight.value = " ";
  growth.value = " ";
  age.value = " ";
};
