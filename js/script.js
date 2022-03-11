const hourDOM = document.getElementById('hour');
const minuteDOM = document.getElementById('minute');
const secondDOM = document.getElementById('second');
const morningDOM = document.getElementById('morning');

const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

const currTime = new Date();
hourDOM.innerHTML = (currTime.getHours() > 12) ? currTime.getHours()-12 : currTime.getHours();
minuteDOM.innerHTML = currTime.getMinutes();
secondDOM.innerHTML = currTime.getSeconds();
morningDOM.innerHTML = (currTime.getHours() > 12) ? 'pm' : 'am';
secondHand.style.transform = `rotate(${currTime.getSeconds() * 6}deg)`;
minuteHand.style.transform = `rotate(${currTime.getMinutes() * 6}deg)`;
hourHand.style.transform = `rotate(${currTime.getHours() * 30}deg)`;

setInterval(() => {
    const currTime = new Date();
    hourDOM.innerHTML = (currTime.getHours() > 12) ? currTime.getHours()-12 : currTime.getHours();
    minuteDOM.innerHTML = (currTime.getMinutes() < 10) ? `0${currTime.getMinutes()}` : currTime.getMinutes();
    secondDOM.innerHTML = (currTime.getSeconds() < 10) ? `0${currTime.getSeconds()}` : currTime.getSeconds();
    morningDOM.innerHTML = (currTime.getHours() > 12) ? 'pm' : 'am';

    secondHand.style.transform = `rotate(${currTime.getSeconds() * 6}deg)`;
    minuteHand.style.transform = `rotate(${currTime.getMinutes() * 6}deg)`;
    hourHand.style.transform = `rotate(${currTime.getHours() * 30}deg)`;
}, 1000);