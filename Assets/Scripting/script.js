const popupNotWork = document.querySelector('.notWork');

const starsContainer = document.getElementById('stars-container');
const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
    button.addEventListener('click', () => {
        popupNotWork.style.display = 'flex';
        popupNotWork.classList.remove('fadeOut');
        popupNotWork.style.opacity = '1';

        setTimeout(() => {
            popupNotWork.classList.add('fadeOut');
            setTimeout(() => {
                popupNotWork.style.display = 'none';
            }, 500);
        }, 1100);
    });
});



    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${5 + Math.random() * 10}s`;
        star.style.opacity = Math.random();
        starsContainer.appendChild(star);
    }