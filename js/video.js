let video;
let volumeSlider;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	volumeSlider = document.querySelector("#slider");
	video.autoplay = false;
	video.loop = false;
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#play").addEventListener("click", function() {
	console.log(volumeSlider)
	video.volume = volumeSlider.value * 0.01;
	video.play();
})

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
})

