const secondHand = document.querySelector('.second-hand');
const minsHand   = document.querySelector('.min-hand');
const hourHand   = document.querySelector('.hour-hand');

const setDate = () => {
    const now = new Date();
    /*const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minutes = now.getMinutes();
    const minutesDegrees = ( (minutes / 60) * 360) + 90 ;
    minsHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ( (hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    if(secondsDegrees === 90 ){
        secondHand.style.transition = 'none';
    }else{
        secondHand.style.transition = 'transition: all 0.05s';
    }
*/
    const {seconds,minutes,hours} = { // desestructuración de objeto Date
        seconds: now.getSeconds(),
        minutes: now.getMinutes(),
        hours: now.getHours(),
    };

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ( (minutes / 60) * 360) + 90 ;
    const hoursDegrees = ( (hours/12) * 360) + 90;

    //Control de la transición en los 90 grados
    if(secondsDegrees === 90 ){
        secondHand.style.transition = 'none';
    }else{
        secondHand.style.transition = 'transition: all 0.05s';
    }

    //Aplicamos la transformación rotate con el valor de los grados de cada aguja
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minsHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

// Posicionamiento inicial sin transición
setDate();
[secondHand,minsHand,hourHand].forEach(hand => hand.style.transition = 'none');

// Activar la transición después del primer ajuste
setTimeout(()=>{
    [secondHand,minsHand,hourHand].forEach(hand => hand.style.transition = 'all 0.05s');
},20);


// Actualizar el reloj cada segundo
const updateClock = () =>{
    setDate();
    requestAnimationFrame(updateClock);
}
requestAnimationFrame(updateClock);

