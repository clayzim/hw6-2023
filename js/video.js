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
	video.volume = volumeSlider.value * 0.01;
	video.play();
})

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
})

// Utility function to update video playbackRate
function updateSpeed(video, scaler) {
	video.playbackRate *= scaler;
	// Set speed to exactly 100% when close to mitigate accumulating error
	if (video.playbackRate > 0.99 && video.playbackRate < 1.01) {
		video.playbackRate = 1.0;
	}
	console.log(`Speed is now ${video.playbackRate * 100}%`);
}

// Slow video down by 10%
document.querySelector("#slower").addEventListener("click", function() {
	updateSpeed(video, 90 / 100);
})

// Speed video up by 10%
document.querySelector("#faster").addEventListener("click", function() {
	updateSpeed(video, 100 / 90);
})

