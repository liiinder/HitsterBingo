let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = 0;
let reset = document.querySelector('.reset-btn');

spinBtn.onclick = function(){
    value += Math.ceil(Math.random() * 360 * 6) + 720; // minst 2 / max 8 varv
    wheel.style.transform = "rotate(" + value + "deg)";
    let result = value % 360;
    switch (true) {
        case (351 <= result || result < 63):
            reset.innerHTML = "Nollställ bingobrädet - Rosa";
            break;
        case (63 <= result && result < 135):
            reset.innerHTML = "Nollställ bingobrädet - Blå";
            break;
        case (135 <= result && result < 207):
            reset.innerHTML = "Nollställ bingobrädet - Grön";
            break;
        case (207 <= result && result < 279):
            reset.innerHTML = "Nollställ bingobrädet - Orange";
            break;
        case (279 <= result && result < 351):
            reset.innerHTML = "Nollställ bingobrädet - Röd";
            break;
    }
}

/*
    63 - 135 = blå
    135 - 207 = grön
    207 - 279 = orange
    279 - 351 = röd
    351 - 63 = rosa
*/

// based on -> https://www.youtube.com/watch?v=F3-lK_-PQr0