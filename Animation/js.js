function animation() {
    let audio = new Audio("./Music/Sounds/start audio.mp3")
    let go  = document.getElementById("go");
    go.style.transition = "all 1s"
    go.style.rotate = "-360deg"
    go.style.marginTop = "-50px"
    audio.play()
    setTimeout(() => {
        location.href = "./Levels/lev1.html"
    }, 5000);
}