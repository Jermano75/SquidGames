let playernumber = 0;

function createchar(w) {
    document.getElementById('playerChoosed').src = "img/players/" + w + ".png";
    document.getElementById('playerChoosed').style.width = "150px";
    document.getElementById('playerChoosed').style.height = "150px";
    document.getElementById('playerChoosed').style.float = "left";
    playernumber = playernumber + 1;
    document.getElementById("counterNumber").innerHTML = "0000000" + playernumber;
    console.log(playernumber);
    document.getElementById('number').innerHTML = "0000000" + playernumber;
}