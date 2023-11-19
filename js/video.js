let video;
let volumeSlider;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	volumeSlider = document.querySelector("#slider");
	video.autoplay = false;
	console.log(`Auto play is set to ${video.autoplay}`);
	video.loop = false;
	console.log(`Loop is set to ${video.loop}`);
});

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
	console.log("Play Video");
})

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
})

// Utility function to update video playbackRate
function updateSpeed(video, scaler) {
	video.playbackRate *= scaler;
	// Set speed to exactly 100% when close to mitigate accumulating error
	if (video.playbackRate > 0.99 && video.playbackRate < 1.01) {
		video.playbackRate = 1.0;
	}
	console.log(`Speed is ${video.playbackRate}`);
}

// Slow video down by 10%
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	updateSpeed(video, 90 / 100);
})

// Speed video up to reverse 10% slowdown
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	updateSpeed(video, 100 / 90);
})

// Skip ahead ten seconds
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	let currentTime = video.currentTime;
	let newTime = 10 + currentTime;
	// If end of video is reached or exceded, go back to 0:00 exactly
	if (newTime >= video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = newTime;
	}
	console.log(`Video current time is ${video.currentTime}`);
})

// Mute/unmute
document.querySelector("#mute").addEventListener("click", function() {
	console.log(this.textContent);
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
	console.log(`The current value is ${this.value / 100}`);
	updateVolume(video, volumeSlider);
	console.log(document.querySelector("#volume"));
})

// Style with oldSchool class when "Old School" button is activated
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
})

// Remove oldSchool class styling when "Original" button is activated
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
})