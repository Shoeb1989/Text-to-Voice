const textInput = document.getElementById('text-input');
const convertBtn = document.getElementById('convert-btn');
const stopBtn = document.getElementById('stop-btn');

let synth = window.speechSynthesis;
let utterance = new SpeechSynthesisUtterance();

convertBtn.addEventListener('click', () => {
    if (textInput.value !== '') {
        utterance.text = textInput.value;
        synth.speak(utterance);
        stopBtn.disabled = false;
    }
});

stopBtn.addEventListener('click', () => {
    synth.cancel();
    stopBtn.disabled = true;
});
