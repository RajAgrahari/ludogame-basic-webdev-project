const names = prompt('Enter your name');
document.getElementById("you").innerHTML = names;
const roll = document.getElementById('roll');
function start() {
    const play1 = Math.floor(Math.random() * 6) + 1;
    const play2 = Math.floor(Math.random() * 6) + 1;
    const play1dice = `src/dice${play1}.png`;
    const play2dice = `src/dice${play2}.png`;
    document.getElementById("p1").setAttribute("class", "pd");
    document.getElementById("p2").setAttribute("class", "pd");
    document.getElementById("p1").setAttribute("src", play1dice);
    document.getElementById("p2").setAttribute('src', play2dice);
    setTimeout(() => {
        document.getElementById("p1").removeAttribute("class", "pd");
        document.getElementById("p2").removeAttribute("class", "pd");
        if (play1 > play2)
            document.getElementById("h1").innerHTML = "Raj won!";
        else if (play2 > play1)
            document.getElementById("h1").innerHTML = `${names} won!`;
        else
            document.getElementById("h1").innerHTML = "Draw! ";
    }, 700)
}
roll.addEventListener('click', start);
