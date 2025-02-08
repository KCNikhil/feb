const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
  ];
  
  let messageIndex = 0;
  
  function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Update the "No" button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Reposition the "No" button randomly within the container
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const newLeft = Math.floor(Math.random() * (containerRect.width - noButton.offsetWidth));
    const newTop = Math.floor(Math.random() * (containerRect.height - noButton.offsetHeight));
    noButton.style.position = 'absolute';
    noButton.style.left = `${newLeft}px`;
    noButton.style.top = `${newTop}px`;
    
    // Increase the "Yes" button size faster (multiplier changed from 1.1 to 1.5)
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.transition = 'font-size 0.3s ease';
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
  }
  
  function handleYesClick() {
    // Trigger confetti animation (using canvas-confetti)
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    // Play a sound (ensure you have a file "yay.mp3" in the song folder)
    const audio = new Audio('song/yay.mp3');
    audio.play();
    
    // Wait a short moment to let the animations play before redirecting
    setTimeout(() => {
      window.location.href = "yes_page.html";
    }, 1000);
  }
  