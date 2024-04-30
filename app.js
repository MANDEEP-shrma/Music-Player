let arr = [
  {
    songName: "Teeje Week",
    image: "./images/Teeje-Week.webp",
    song: "./songs/Teeje-Week.mp3",
  },
  {
    songName: "One Love",
    image: "./images/OneLove.webp",
    song: "./songs/One Love.mp3",
  },
  {
    songName: "Elevated",
    image: "./images/Elevated.webp",
    song: "./songs/Elevated.mp3",
  },
  {
    songName: "Yaar Haryane te",
    image: "./images/Yaar.webp",
    song: "./songs/Yaar Haryane Te.mp3",
  },
];
let flag = 0;
let allSongs = document.querySelector("#all-songs");
let audio = new Audio();
let poster = document.querySelector("#left");

let play = document.querySelector("#play");
let backward = document.querySelector("#backward");
let forward = document.querySelector("#forward");

let selectedSong = 0;

function mainFunc() {
  let clutter = "";
  arr.forEach((elem, idx) => {
    clutter += ` <div class="song-card" id="${idx}">
            <div class="part1">
              <img
                src="${elem.image}"
              />
              <h2>${elem.songName}</h2>
            </div>
            <h6>2:51</h6>
          </div>`;
  });
  audio.src = arr[selectedSong].song;
  poster.style.background = `url(${arr[selectedSong].image})`;
  allSongs.innerHTML = clutter;
}

mainFunc();
allSongs.addEventListener("click", (dets) => {
  /*console.log(arr[dets.target.id].image);
   *we gave our every siungle card a unique id which is nothing but just an index so we use it here  */

  selectedSong = dets.target.id;
  play.innerHTML = `<i class="ri-pause-fill">`;
  flag = 1;
  mainFunc();
  audio.play();
});

play.addEventListener("click", () => {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-fill">`;
    flag = 1;
    mainFunc();
    audio.play();
  } else {
    play.innerHTML = `<i class="ri-play-fill">`;
    flag = 0;
    mainFunc();
    audio.pause();
  }
});

forward.addEventListener("click", () => {
  if (selectedSong < arr.length - 1) {
    selectedSong++;
    mainFunc();
    play.innerHTML = `<i class="ri-pause-fill">`;
    backward.style.opacity = "1";
    audio.play();
  } else {
    forward.style.opacity = "0.2";
  }
});

backward.addEventListener("click", () => {
  if (selectedSong > 0) {
    selectedSong--;
    mainFunc();
    play.innerHTML = `<i class="ri-pause-fill">`;
    forward.style.opacity = "1";
    audio.play();
  } else {
    backward.style.opacity = "0.2";
  }
});
