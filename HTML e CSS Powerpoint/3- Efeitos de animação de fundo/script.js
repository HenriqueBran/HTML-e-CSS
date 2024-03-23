document.addEventListener('mousemove', function(event) {
    const snake = document.querySelector('.fa-snake');
    const x = event.clientX;
    const y = event.clientY;
    
    snake.style.top = y + 'px';
});
