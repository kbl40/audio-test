const musicBtn = document.getElementById("music-btn")
const pauseBtn = document.getElementById("pause-btn")
const music = document.getElementById("heatley-tune")

musicBtn.addEventListener("click", function() {
    music.play()
})

pauseBtn.addEventListener("dblclick", function() {
    music.pause()
})