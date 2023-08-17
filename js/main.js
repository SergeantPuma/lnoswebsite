var currentSoundIndex = 0;
var sounds = [
    "lnos.mp3",
    "lnos2.mp3",
    "lnos6.mp3",
    "lnos3.mp3",
    "lnos4.mp3",
    "lnos5.mp3",
    "lnos7.mp3",
    "lnos8.mp3",
];
var audioPlayer = new Audio(); // Erstelle ein neues Audio-Element

function playNextSound() {
    var soundFile = sounds[currentSoundIndex];
    audioPlayer.src = soundFile; // Setze die Quelle für das Audio-Element
    audioPlayer.play(); // Starte die Wiedergabe

    currentSoundIndex++;
    if (currentSoundIndex >= sounds.length) {
        currentSoundIndex = 0;
    }
}

audioPlayer.addEventListener('ended', playNextSound); // Event-Listener für das Ende der Wiedergabe

function changeIcon(anchor) {
    var icon = anchor.querySelector("i");
    icon.classList.toggle('fa-volume-xmark');
    icon.classList.toggle('fa-volume-high');

    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}
