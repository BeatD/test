let time = 500;
let countdownFinished = false;
let hitSound = new Audio("../Music/Sounds/hit.mp3");
function START() {
    let a1tri = false;
    let a2tri = false;
    let a3tri = false;
    let a4tri = false;
    let a1 = document.getElementById("arrow1")
    let a2 = document.getElementById("arrow2")
    let a3 = document.getElementById("arrow3")
    let a4 = document.getElementById("arrow4")
    let rand = 0;
    rand = Math.floor(Math.random()*4)
    if (rand === 1) {
        a1.src = "../Data/BeatOn.png"
        a1tri = true;
        hitSound.play()
        setTimeout(() => {
            a1tri = false;
            a1.src = "../Data/BeatArrow.png"
            START()
        }, time);
    }
    if (rand === 2) {
        a2.src = "../Data/BeatOn.png"
        a2tri = true;
        hitSound.play()
        setTimeout(() => {
            a2tri = false;
            a2.src = "../Data/BeatArrow.png"
            START()
        }, time);
    }
    if (rand === 3) {
        a3.src = "../Data/BeatOn.png"
        a3tri = true;
        hitSound.play()
        setTimeout(() => {
            a3tri = false;
            a3.src = "../Data/BeatArrow.png"
            START()
        }, time);
    }
    if (rand === 4) {
        a4.src = "../Data/BeatOn.png"
        a4tri = true;
        hitSound.play()
        setTimeout(() => {
            a4tri = false;
            a4.src = "../Data/BeatArrow.png"
            START()
        }, time);
    }

}
setInterval(() => {
    if (countdownFinished === true) {
        START();
    }
}, 2000);
document.addEventListener("DOMContentLoaded", ()=> {
    let countdown = document.getElementById("count")
    let startMusic = new Audio("../Music/Sounds/rise1.mp3");
    startMusic.play()
    setTimeout(() => {
        countdown.innerHTML = "2 !"
    }, 1000);
    setTimeout(() => {
        countdown.innerHTML = "1 !"
    }, 2000);
    setTimeout(() => {
        countdown.innerHTML = "GO !!!"
    }, 3000);
    setTimeout(() => {
        countdown.innerHTML = ""
    }, 4000);
    setTimeout(() => {
        START();
        countdownFinished = true;     
    }, 4100);    
})
