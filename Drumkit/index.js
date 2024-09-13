const playSound = (e) => {

    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    const key = document.querySelector(`.key[data-key=${e.code}]`);
    if(!audio) return;
    audio.currentTime = 0; 
    audio.play();
    key.classList.add('playing'); //add playing class
}

const removeTransition = (e) => {
    if(e.propertyName !== 'transform') return; //Si no es igual a transform, seguí

    e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown',playSound);