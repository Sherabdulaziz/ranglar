let music = document.querySelector(".audio-music");

let audio = document.querySelector(".audio");
let body = document.querySelector("body");
setInterval(() => {
  let a = Math.floor(Math.random() * 255 - 1 + 1) + 1;
  let b = Math.floor(Math.random() * 255 - 1 + 1) + 1;
  let c = Math.floor(Math.random() * 255 - 1 + 1) + 1;
  audio.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
  music.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}, 10);
setInterval(() => {
  let a = Math.floor(Math.random() * 255 - 1 + 1) + 1;
  let b = Math.floor(Math.random() * 255 - 1 + 1) + 1;
  let c = Math.floor(Math.random() * 255 - 1 + 1) + 1;
  body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}, 2500);
