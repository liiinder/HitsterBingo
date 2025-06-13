let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = 0;
let reset = document.querySelector('.reset-btn');

spinBtn.onclick = function(){
    value += Math.ceil(Math.random() * 360 * 6) + 720; // minst 2 / max 8 varv
    wheel.style.transform = "rotate(" + value + "deg)";
    spinBtn.style.background = "#fff";
    let result = value % 360;
    setTimeout(
        function() {
            switch (true) {
                case (351 <= result || result < 63): // pink
                    spinBtn.style.background = "#ff46ed";
                    break;
                case (63 <= result && result < 135): // blue
                    spinBtn.style.background = "#00ddff";
                    break;
                case (135 <= result && result < 207): // green
                    spinBtn.style.background = "#00ff2e";
                    break;
                case (207 <= result && result < 279): // orange
                    spinBtn.style.background = "#ff8800";
                    break;
                case (279 <= result && result < 351): // red
                    spinBtn.style.background = "#ff1900";
                    break;
            }
        }, 5000);
}

/*
    63 - 135 = blå
    135 - 207 = grön
    207 - 279 = orange
    279 - 351 = röd
    351 - 63 = rosa
*/

// based on -> https://www.youtube.com/watch?v=F3-lK_-PQr0