  const textElement = document.getElementById('animatedText');
  const originalText = textElement.innerText;
  const animationFrames = [
    "Developer",
    "Frontend Developer"
  ];

  let frameIndex = 0;

  function animateText() {
    textElement.innerText = animationFrames[frameIndex];
    frameIndex = (frameIndex + 1) % animationFrames.length;
  }

  setInterval(animateText, 1000);
