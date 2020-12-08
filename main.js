
let bttn = document.querySelector ('button');
let offImg = document.querySelector(".turnOff");
let onImg = document.querySelector(".turnOn");

bttn.addEventListener('click', onOff);

function onOff() {
    if (bttn.textContent !== 'ON'){
        bttn.textContent = 'OFF';
        offImg.style.display = "none";
        onImg.style.display = "block";
    
    } else if (bttn.textContent === 'OFF') {
        bttn.textContent = 'ON';
        offImg.style.display = "block";
        onImg.style.display = "none";
    }
}
