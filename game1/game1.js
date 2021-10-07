var lives = parseInt(document.getElementById('lives'));
lives.innerHTML = 3;
vidas = 3;

function go() {

    if (vidas == 3) {
        timer()
    } else if (vidas == 0) {
        //window.location.href = "../pregame.html"

        document.getElementById('time').
        vidas = 3;
        window.location.reload();
    }

    var lives = document.getElementById('lives');
    lives.innerHTML = "3";
    let img3 = document.getElementById('img3');
    img3.src = "../img/card_red.png";
    img3.style.width = "100px";
    img3.style.height = "65px";
    let power = parseInt(document.getElementById("power").value);
    document.getElementById("playbutton").disabled = true;
    document.getElementById("power").disabled = true;
    document.getElementById("card").classList.add("floating");
    setTimeout(function() {
        document.getElementById("playbutton").disabled = false;
        document.getElementById("power").disabled = false;
        document.getElementById("card").classList.remove("floating");
        let luckypower = parseInt(Math.random() * 690);
        //console.log("INPUT: " + power);
        //console.log(luckypower);

        let powerminus = power - 20;
        let powerplus = power + 20;

        //console.log(powerminus);
        //console.log(powerplus);

        if (luckypower >= powerminus && luckypower <= powerplus) {
            switch (lives) {
                case 0:
                    lives = 3;
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'You won:' + 2000 + 'RP',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    break;
                case 1:
                    lives = 2;
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'You won:' + 1500 + 'RP',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    break;
                case 2:
                    lives = 1;
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'You won:' + 500 + 'RP',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    break;
            }
            img3.src = "../img/card_red_flip.png";
            img3.style.width = "100px";
            img3.style.height = "65px";
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'You Died!',
                showConfirmButton: false,
                timer: 1500
            });
            vidas--;
            console.log(vidas);
            lives.innerHTML = vidas;

            play()
        }
    }, 3500);
}


function play() {
    var audio = new Audio('../sound/Gun_Shot_Sound_Effect.mp3');
    audio.play();
}

function timer() {
    var cc = 60;

    var interval = setInterval(function() {
        document.getElementById("time").innerHTML = "00:" + --cc;

        if (cc == 0) {
            clearInterval(interval);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Time is Over! You Die',
                showConfirmButton: false,
                timer: 1500
            });
        }


    }, 1000);
}


$(function() {
    $("#power").change(function() {
        if ($(this).val() == "1") {
            Swal.fire({
                position: 'top-end',
                icon: 'info',
                title: 'Your Strength is: 1',
                showConfirmButton: false,
                timer: 1500
            });
        }
        $("#inputvalue").text($(this).val());
    });
});