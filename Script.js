

const startBtn = document.getElementById('startBtn');
const output = document.getElementById('output');

startBtn.addEventListener('click', () => {
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    output.innerText = "🗣️ You said: " + transcript;
  };

  recognition.onerror = (event) => {
    output.innerText = "❌ Error: " + event.error;
  };
});ē


