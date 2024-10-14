// Create snowflakes
function createSnowflakes() {
    const snowflakesContainer = document.createElement('div');
    snowflakesContainer.className = 'snowflakes';
    document.body.appendChild(snowflakesContainer);
  
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '<div class="inner">❅</div>';
      
      // Set random position and animation delay
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.animationDelay = Math.random() * 10 + 's';
      snowflakesContainer.appendChild(snowflake);
    }
  }
  
  document.addEventListener('DOMContentLoaded', createSnowflakes);
  