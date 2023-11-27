const movingDiv = document.getElementById('movingDiv');
let currentPosition = 0;
let direction = 1; 
function moveDiv() {
  currentPosition += direction;

  if (direction === 1 && currentPosition >= window.innerWidth - 50) {
    direction = -1;
  } else if (direction === -1 && currentPosition <= 0) {
    direction = 1;
  }

  movingDiv.style.left = currentPosition + 'px';
}

setInterval(moveDiv, 0.0003);
