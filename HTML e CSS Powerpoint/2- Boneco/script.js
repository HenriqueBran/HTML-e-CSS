document.addEventListener('DOMContentLoaded', function () {
    const leftEye = document.querySelector('.left-eye');
    const rightEye = document.querySelector('.right-eye');
    
    document.addEventListener('mousemove', function (event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        const eyeWidth = leftEye.offsetWidth;
        const eyeHeight = leftEye.offsetHeight;
        
        const eyePosX = leftEye.getBoundingClientRect().left + eyeWidth / 2;
        const eyePosY = leftEye.getBoundingClientRect().top + eyeHeight / 2;
        
        const angleLeft = Math.atan2(mouseY - eyePosY, mouseX - eyePosX);
        const angleRight = Math.atan2(mouseY - eyePosY, mouseX - eyePosX);
        
        const eyeTranslateX = Math.cos(angleLeft) * (eyeWidth / 4);
        const eyeTranslateY = Math.sin(angleLeft) * (eyeHeight / 4);
        
        leftEye.style.transform = `translate(${eyeTranslateX}px, ${eyeTranslateY}px)`;
        
        const eyeTranslateXRight = Math.cos(angleRight) * (eyeWidth / 4);
        const eyeTranslateYRight = Math.sin(angleRight) * (eyeHeight / 4);
        
        rightEye.style.transform = `translate(${eyeTranslateXRight}px, ${eyeTranslateYRight}px)`;
    });
});
