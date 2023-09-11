// Audio Play
const audio = new Audio('sample-3s.mp3');
audio.loop = true; // Set the loop property to true to enable looping

let isIframeOpen = false;

const iframe = document.getElementById("myiFrame");

// Function to send an event to the iframe
function sendMessageToIframe() {
    const message = "mute";
    iframe.contentWindow.postMessage(message, "*");
}

const playAudio = () => {
    console.log(audio.muted, isIframeOpen);
    // Check if the audio is playing
    if (!audio.muted && !isIframeOpen) {
        // Play the audio
        audio.play();
    }
}

function addClassOnClick() {
    const element = document.getElementById('ext-html-label');
    element.classList.add('ext-html-label-center');
    element.style.display = 'block';
    isIframeOpen = true
    audio.muted = true;
}



function closeOnClick() {
    if (audio.muted) {
        audio.muted = false;
        isIframeOpen = false;
        sendMessageToIframe()
    }
    const element = document.getElementById('ext-html-label');
    element.style.display = 'none';
}


// document.getElementById('container').addEventListener('click', addClassOnClick);


document.getElementById('ext-html-label-close').addEventListener('click', closeOnClick);
