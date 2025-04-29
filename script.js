console.log("Website loaded!");


function animateButton() {
    // Get the image element
    const buttonImage = document.querySelector('.image-button img');
    
    // Apply the dissolve effect (fade out)
    buttonImage.style.animation = 'dissolve 1s ease-out forwards';
    
    // Wait for the animation to end, then navigate
    setTimeout(() => {
      window.location.href = "iPhone13-and-14-2.html"; // Navigate after animation
    }, 1000); // Time should match the animation duration
  }