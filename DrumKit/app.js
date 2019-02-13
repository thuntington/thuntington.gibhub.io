// Play drum by keyboard press
const clap = document.getElementById('clap');
const hiHat = document.getElementById('hiHat');
const kick = document.getElementById('kick');
const openHat = document.getElementById('openhat');
const boom = document.getElementById('boom');
const ride = document.getElementById('ride');
const snare = document.getElementById('snare');
const tom = document.getElementById('tom');
const tink = document.getElementById('tink');

//CLAP
function keycode(){
window.addEventListener('keypress', () => {
    var x = event.key;
    if (x == "a" || x == "A") { 
    clap.currentTime = 0;
    clap.play();
    
}
})
};

const clapBtn = document.getElementById('a-clap')

clapBtn.addEventListener('click', () => {
    clap.currentTime = 0;
    clap.play();
});

//Hihat
window.addEventListener('keypress', () => {
    var x = event.key;
    if (x == "s" || x == "S") { 
        hiHatBtn.style.backgroundColor = 'yellow'
        hiHat.currentTime = 0;
        hiHat.play();        

}
})

const hiHatBtn = document.getElementById('s-hihat')

hiHatBtn.addEventListener('click', () => {
    hiHat.currentTime = 0;
    hiHat.play();
});

//KICK
window.addEventListener('keypress', () => {
    var x = event.key;
    if (x == "d" || x == "D") { 
    kick.currentTime = 0;
        kick.play();

}
})

const kickBtn = document.getElementById('d-kick')

kickBtn.addEventListener('click', () => {
    kick.currentTime = 0;
    kick.play();
});

//OPEN HAT
window.addEventListener('keypress', () => {
    var x = event.key;
    if (x == "f" || x == "F") { 
    openHat.currentTime = 0;
        openHat.play();

}
})

const openBtn = document.getElementById('f-openhat')

openBtn.addEventListener('click', () => {
    openHat.currentTime = 0;
    openHat.play();
});

//BOOM
window.addEventListener('keypress', () => {
    var x = event.key;
    if (x == "g" || x == "G") { 
    boom.currentTime = 0;
    boom.play();

}
})

const boomBtn = document.getElementById('g-boom')

boomBtn.addEventListener('click', () => {
    boom.currentTime = 0;
    boom.play();
});

//RIDE
window.addEventListener('keypress', () => {
    var x = event.key;
    if (x == "h" || x == "H") { 
    ride.currentTime = 0;
    ride.play();

}
})

const rideBtn = document.getElementById('h-ride')

rideBtn.addEventListener('click', () => {
    ride.currentTime = 0;
    ride.play();
});

//SNARE
window.addEventListener('keypress', () => {
    var x = event.key;
    if (x == "j" || x == "J") { 
    snare.currentTime = 0;
    snare.play();

}
})

const snareBtn = document.getElementById('j-snare')

snareBtn.addEventListener('click', () => {
    snare.currentTime = 0;
    snare.play();
});

//TOM
window.addEventListener('keypress', () => {
    var x = event.key;
    if (x == "k" || x == "K") { 
    tom.currentTime = 0;
    tom.play();

}
})

const tomBtn = document.getElementById('k-tom')

tomBtn.addEventListener('click', () => {
    tom.currentTime = 0;
    tom.play();
});

//TINK
window.addEventListener('keypress', () => {
    var x = event.key;
    if (x == "l" || x == "L") { 
    tink.currentTime = 0;
    tink.play();

}
})

const tinkBtn = document.getElementById('l-tink')

tinkBtn.addEventListener('click', () => {
    tink.currentTime = 0;
    tink.play();
});