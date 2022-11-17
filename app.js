const bgImages = [
  `<div class="backgroundSlider"><img src="./img/bg-1.jpg" class="bg-img"></div>`,
  ` <div class="backgroundSlider"><img src="./img/bg-2.webp" class="bg-img"></div>`,
  `<div class="backgroundSlider"><img src="./img/bg 3.jpeg" class="bg-img"></div>`,
  `<div class="backgroundSlider"><img src="./img/bg-4.jpeg" class="bg-img"></div>`,
  `<div class="backgroundSlider"><img src="./img/bg 5.jpg" class="bg-img"></div>`,
  `<div class="backgroundSlider"><img src="./img/bg 6.jpg" class="bg-img"></div>`,
  `<div class="backgroundSlider"><img src="./img/bg 7.webp" class="bg-img"></div>`,
];

const slider = document.querySelector(".body-container");
let fader = 0;
const myFader = () => {
  fader = fader === bgImages.length ? 1 : fader + 1;
  slider.innerHTML = bgImages[fader - 1];
  //   console.log(fader);
};
myFader();
setInterval(myFader, 15000);

const headerText = document.querySelector(".header-text");
const jokeText = document.querySelector(".joke-content");
const deliveryText = document.querySelector(".delivery-content");

const greetingText = () => {
  const time = () => {
    const date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let seconds = date.getSeconds();
    let hour = hours + 12;
    if (hour < 12) {
      headerText.textContent = `Good Morning Cynthia!!! A smile is good for the soul!!!`;
    } else if (hour <= 16) {
      headerText.textContent = `Good Afternoon Cynthia!!! A few jokes to make you smile!!!`;
    } else {
      headerText.textContent = `Good Evening Cynthia!!! Take some joke to your dreamland!!!`;
    }
  };
  time();
};
greetingText();

document.querySelector(".change-Btn").addEventListener("click", () => {
  let api = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"`;
  fetch(api)
    .then((e) => {
      {return e.json()};
    })
    .then((data) => {
      let jokes = data.setup;
      let delivery = data.delivery;
      jokeText.textContent = `${jokes}`;
      deliveryText.textContent = `${delivery}`;
    });
});
