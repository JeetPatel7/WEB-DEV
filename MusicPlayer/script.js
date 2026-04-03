// --- Variables (We use 'var' which is simple and standard) ---
var registrationView = document.getElementById('registration-view');
var playerView = document.getElementById('player-view');
var userForm = document.getElementById('userForm');
var welcomeUser = document.getElementById('welcomeUser');
var playlistItems = document.getElementById('playlistItems');
var audioPlayer = document.getElementById('mainAudio');
var songTitle = document.getElementById('songTitle');
var artistName = document.getElementById('artistName');
var backBtn = document.getElementById('backBtn');

// Variables for the Visualizer (Canvas)
var canvas = document.getElementById('audioVisualizer');
var ctx = canvas.getContext('2d');

// --- 1. Form Submission (When clicking 'Submit') ---
userForm.onsubmit = function(event) {
    // Prevent the page from reloading
    event.preventDefault();

    // Get the User Details from the boxes
    var fName = document.getElementById('firstName').value;
    var lName = document.getElementById('lastName').value;

    // Show a Welcome Message
    welcomeUser.innerText = "Welcome, " + fName + " " + lName + "!";

    // Get the music files selected by the user
    var fileInput = document.getElementById('musicFiles');
    var files = fileInput.files;

    // Clear any old playlist
    playlistItems.innerHTML = "";

    // Check if user uploaded any files
    if (files.length > 0) {
        
        // Loop through each file to add it to the playlist
        for (var i = 0; i < files.length; i++) {
            var file = files[i];

            // Create a temporary link for the browser to play this file
            var fileUrl = URL.createObjectURL(file);

            // Create a list item (li) for the playlist
            var li = document.createElement('li');
            li.innerText = file.name; // This shows the file name

            // When I click on this list item, play the song
            li.onclick = function() {
                playSong(fileUrl, file.name, "Local Artist");
            };

            // Add the new list item to the playlist box
            playlistItems.appendChild(li);
        }
    } else {
        alert("Please select some music files first!");
        return; // Stop here if no files
    }

    // Hide the Registration Form
    registrationView.style.display = "none";

    // Show the Music Player
    playerView.style.display = "block";
    playerView.classList.remove('hidden'); // Just to be safe with existing CSS

    // Start the visual animation
    animate();
};

// --- 2. Back Button (When clicking 'Back') ---
backBtn.onclick = function() {
    // Pause the music
    audioPlayer.pause();

    // Hide the Player
    playerView.style.display = "none";

    // Show the Registration Form again
    registrationView.style.display = "block";
};

// --- 3. Function to Play a Song ---
function playSong(url, title, artist) {
    audioPlayer.src = url;       // Tell the player which file to play
    audioPlayer.play();          // Start the audio
    songTitle.innerText = title; // Change the title text
    artistName.innerText = artist; // Change the artist text
}

// --- 4. Visualizer (Making the bars move) ---
// Set the size of our drawing area
canvas.width = 600;
canvas.height = 200;

function animate() {
    // Clear the drawing area
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the Black Background
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Settings for the bars
    var totalBars = 50;
    var barWidth = canvas.width / totalBars;

    // If music is playing, draw moving bars
    if (audioPlayer.paused === false) {
        
        for (var i = 0; i < totalBars; i++) {
            // Random height for each bar to make it look like music
            var height = Math.random() * 100 + 20;

            var xPosition = i * barWidth;
            var yPosition = canvas.height - height;

            // Draw the bar using a color
            ctx.fillStyle = "#ff0055";
            ctx.fillRect(xPosition, yPosition, barWidth - 2, height);
        }

    } else {
        // If music is paused, show some text
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText("Play a song to see visuals", 180, 100);
    }

    // Call this function again and again to make it animate
    requestAnimationFrame(animate);
}
