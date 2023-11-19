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

// Converts slider into range [0, 1] volume needs
function getVolume(slider) {
	return slider.value * 0.01;
}

// Sets video to volume denoted by slider
function updateVolume(video, slider) {
	video.volume = getVolume(slider);
	// Render volume percentage as text to the page
	document.querySelector("#volume").textContent = `${video.volume * 100}%`;
}

document.querySelector("#play").addEventListener("click", function() {
	updateVolume(video, volumeSlider);
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

// Speed video up to reverse 10% slowdown
document.querySelector("#faster").addEventListener("click", function() {
	updateSpeed(video, 100 / 90);
})

// Skip ahead ten seconds
document.querySelector("#skip").addEventListener("click", function() {
	let currentTime = video.currentTime;
	let newTime = 10 + currentTime;
	// If end of video is exceded, go back to 0:00 exactly
	if (newTime > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = newTime;
	}
	console.log(`Current location in video is ${video.currentTime} seconds`);
})

// Mute/unmute
document.querySelector("#mute").addEventListener("click", function() {
	// Invert truth value of muted state
	video.muted = !video.muted;
	let muted = video.muted;
	let newText;
	// Set button text to read opposite of current state
	if (muted) {
		newText = "Unmute";
	}
	else {
		newText = "Mute";
	}
	this.textContent = newText;
})

// Adjust volume when range input slider is changed
document.querySelector("#slider").addEventListener("input", function() {
	updateVolume(video, volumeSlider);
	console.log(`Volume is now ${video.volume * 100}%`);
})