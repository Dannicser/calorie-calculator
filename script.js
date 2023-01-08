let inputWoman = document.querySelector("#gen-w");
let inputMan = document.querySelector("#gen-m");
let btnWoman = document.querySelector(".btn_woman");
let btnMan = document.querySelector(".btn_man");
let age = document.querySelector("#age-1");
let weight = document.querySelector("#weight-1");
let growth = document.querySelector("#growth-1");
let button = document.querySelector(".btn");
let activityMin = document.querySelector("#el-1");
let activityLow = document.querySelector("#el-2");
let activityMiddle = document.querySelector("#el-3");
let activityHigh = document.querySelector("#el-4");
let activityVeryHigh = document.querySelector("#el-5");

// имя пользователя!
inputWoman.onclick = () => {
  console.log("Пользователь женщина!");
};

inputMan.onclick = () => {
  console.log("Пользователь мужчина!");
};

// смена пола!

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
    let n = 10 * weight.value + 6.25 * growth.value - 5 * age.value - 161;
    // weight.value = "";
    // growth.value = "";
    // age.value = "";

    if (activityMin.checked) {
      document.querySelector(".out").innerHTML =
        "<div class='style'> Вам необходимо:</div>" +
        " " +
        Math.round(n * 1.2) +
        " " +
        "<div class='res'>калорий в сутки</div>";
    }
    if (activityLow.checked) {
      document.querySelector("h4").innerHTML =
        "<div class='style'>Вам необходимо:</div>" +
        " " +
        Math.round(n * 1.375) +
        " " +
        "<div class='res'>калорий в сутки</div>";
    }
    if (activityMiddle.checked) {
      document.querySelector("h4").innerHTML =
        "  <div class='style'>Вам необходимо:</div>" +
        " " +
        Math.round(n * 1.55) +
        " " +
        "<div class='res'>калорий в сутки</res>";
    }
    if (activityHigh.checked) {
      document.querySelector("h4").innerHTML =
        "<div class='style'>Вам необходимо:</div>" +
        " " +
        Math.round(n * 1.725) +
        " " +
        "<div class='res'>калорий в сутки:</div>";
    }
    if (activityVeryHigh.checked) {
      document.querySelector("h4").innerHTML =
        "<div class='style'>Вам необходимо: </div>" +
        " " +
        Math.round(n * 1.9) +
        " " +
        "<div class='res'>калорий в сутки</div>";
    }
  }
  if (inputMan.checked) {
    let n = 10 * weight.value + 6.25 * growth.value - 5 * age.value + 5;

    if (activityMin.checked) {
      document.querySelector("h4").innerHTML =
        "<div class='style'>Вам необходимо: </div>" +
        " " +
        Math.round(n * 1.2) +
        " " +
        "<div class='res'>калорий в сутки</div>";
    }
    if (activityLow.checked) {
      document.querySelector("h4").innerHTML =
        "<div class='style'>Вам необходимо: </div>" +
        Math.round(n * 1.375) +
        " " +
        "<div class='res'>калорий в сутки</div>";
    }
    if (activityMiddle.checked) {
      document.querySelector("h4").innerHTML =
        "<div class='style'>Вам необходимо: </div>" +
        Math.round(n * 1.55) +
        " " +
        "<div class='res'>калорий в сутки</div>";
    }
    if (activityHigh.checked) {
      document.querySelector("h4").innerHTML =
        "<div class='style'>Вам необходимо: </div>" +
        Math.round(n * 1.725) +
        " " +
        "<div class='res'>калорий в сутки</div>";
    }
    if (activityVeryHigh.checked) {
      document.querySelector("h4").innerHTML =
        "<div class='style'>Вам необходимо:</div>" +
        Math.round(n * 1.9) +
        " " +
        "<div class='res'>калорий в сутки</div>";
    }
  }
};
