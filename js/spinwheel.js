let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);

spinBtn.onclick = function(){
    wheel.style.transform = "rotate(" + value + "deg)";
    value += Math.ceil(Math.random() * 360 * 6) + 720; // minst 2 / max 8 varv
}

// based on -> https://www.youtube.com/watch?v=F3-lK_-PQr0