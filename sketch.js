function setup() 
{
    // Show debug pane FIRST to cathch setup errors
    showDebug(); 

	createCanvas(windowWidth, windowHeight);

    // Lock mobile gestures to prevent browser interference
    lockGesture(); 

    // Enable motion sensors with tap-to-start
    enableGyroTap('Tap to enable motion sensors');

    // Enable microphone with tap-to-start
    enableMicTap('Tap to enable microphone');
}

function draw()
{
    background(220);

    // Boolean: true when motion sensors are active (Status variables)
    if (window.sensorsEnabled) {
        
        // Use device rotation and acceleration
        fill(255, 0, 0);
        circle(width/2 + rotationY * 5, height/2 + rotationX * 5, 50);

    }
}

// Prevent default touch behavior (optional but recommended)
function touchStarted() {
    return false;
}
function touchEnded() {
    return false;
}

