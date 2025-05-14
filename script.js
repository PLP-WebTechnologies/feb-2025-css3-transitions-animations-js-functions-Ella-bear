/* CSS for the animated button and click counter */
    (function () {
      const button = document.getElementById('animatedButton');
      const clickCountDiv = document.getElementById('clickCount');

      // Retrieve click count from localStorage or default to 0
      let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;
      updateClickCountText();

      function updateClickCountText() {
        clickCountDiv.textContent = `Button clicked ${clickCount} ${clickCount === 1 ? 'time' : 'times'}`;
      }

      // Function to trigger animation and store click count
      function handleButtonClick() {
        // Increment click count
        clickCount++;
        // Save to localStorage
        localStorage.setItem('clickCount', clickCount);
        updateClickCountText();

        // Add animation class to trigger CSS animation
        button.classList.add('pop-animation');

        // Remove the animation class after animation ends to allow retrigger
        button.addEventListener('animationend', () => {
          button.classList.remove('pop-animation');
        }, { once: true });
      }

      button.addEventListener('click', handleButtonClick);
    })();
  