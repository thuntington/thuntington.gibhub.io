function runClock() {
  
    let now = new Date()  //Uses the local time.
    
    let hour = now.getHours() % 12; // getHours, getMinutes are js methods
    let min  = now.getMinutes();
    let sec  = now.getSeconds();
    let ms   = now.getMilliseconds();
    
    let clock = document.querySelector("div.clock")
    let hourHand = clock.querySelector("#hours")
    let minHand  = clock.querySelector("#minutes")
    let secHand  = clock.querySelector("#seconds");
    
    let hourRotation = 30 * hour + (0.5 * min)
    let minRotation = 6 * min + (0.1 * sec)
    let secRotation = 6 * sec + 0.006 * ms
    
    hourHand.style.transform = "rotate(" + hourRotation + "deg)"
    minHand.style.transform = "rotate(" + minRotation + "deg)"
    secHand.style.transform = "rotate(" + secRotation + "deg)"
    
    requestAnimationFrame(runClock)
}
  
  runClock()

function runDigital () {

    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    document.getElementById("digiClock").innerText = time;
    document.getElementById("digiClock").textContent = time;
    
    setTimeout(runDigital, 500);
    
}

runDigital();