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
function updateSpeed(video, percentage, slower) {
	let scaler = (100 - percentage) / 100;
	// Slow down by percentage
	if (slower) {
		video.playbackRate *= scaler;
	}
	// Speed up by percentage
	else {
		video.playbackRate /= scaler;
	}
	// Reset playback rate to 100% when within margin of error
	if (video.playbackRate > 0.99 && video.playbackRate < 1.01) {
		video.playbackRate = 1.0;
	}
	console.log(`Speed is now ${video.playbackRate * 100}%`);
}

// Slow video down by 10%
document.querySelector("#slower").addEventListener("click", function() {
	updateSpeed(video, 10, true)
})

// Speed video up by 10%
document.querySelector("#faster").addEventListener("click", function() {
	updateSpeed(video, 10, false)
})