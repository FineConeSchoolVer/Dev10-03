let jumpingGif;
let playbackSpeed = 1.0; 
let backgroundColor;

let speedMultiplier = 3.0; 
let maxSpeed = 200.0;
let minSpeedToPlay = 0.1;

function preload() 
{
    // Load a GIF using loadImage
    jumpingGif = loadImage('/IMG_2347.gif');
}

function setup() 
{
    // Show debug panel FIRST to catch setup errors
    // showDebug();
    

	createCanvas(windowWidth, windowHeight);
    backgroundColor = color(220, 211, 220);

    // Lock mobile gestures to prevent browser interference
    lockGestures(); 

    textAlign(CENTER, CENTER);

    // Enable motion sensors with tap-to-start
    enableGyroTap('Tap to enable motion sensors');

    // Enable microphone with tap-to-start
    // enableMicTap('Tap to enable microphone');
}

function draw()
{
    background(backgroundColor);

    // Boolean: true when motion sensors are active (Status variables)
    if (window.sensorsEnabled) {
        
        // Use device rotation and acceleration
        // fill(255, 0, 0);
        // circle(width/2 + rotationY * 5, height/2 + rotationX * 5, 50);

        let tiltAmount = abs(rotationX);
        playbackSpeed = tiltAmount * speedMultiplier;

        debug(rotationX);
        playbackSpeed = constrain(playbackSpeed, 0, maxSpeed);

        if (playbackSpeed < minSpeedToPlay) {
            jumpingGif.pause();
        }
        else {
            jumpingGif.play();
            jumpingGif.delay(int(100 / playbackSpeed));
        }

        push();
        translate(width / 2, height / 2);
        // rotate(HALF_PI);
        imageMode(CENTER);
        image(jumpingGif, 0, 0, height/4, width/4);
        pop();

    }

    else {
        fill(255, 100, 100);
        text("Motion sensors not available", width/2, height/2);
        text("On iOS: Tap to request motion permission", width/2, height/2 + 30);
        text("Check device compatibility", width/2, height/2 + 60);
    }
}

// Prevent default touch behavior (optional but recommended)
function touchStarted() {
    return false;
}
function touchEnded() {
    return false;
}

