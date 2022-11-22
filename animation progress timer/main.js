setInterval(() => {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let hours_dot = document.querySelector('.hours_dot');
    let minutes_dot = document.querySelector('.minutes_dot');
    let seconds_dot = document.querySelector('.seconds_dot');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >= 12 ? "PM" : "AM";

    // convert 24hr clock to 12hr clock
    if (h > 12) {
        h = h - 12;
    }

    // add zero before single digit number
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";
    ampm.innerHTML = ap;

    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    // 12 hours clock
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    // 60 minutes clock
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    // 60 seconds clock

    hours_dot.style.transform = `rotate(${h * 30}deg)`;
    // 360 / 12 = 30
    minutes_dot.style.transform = `rotate(${m * 6}deg)`;
    // 360 / 60 = 6
    seconds_dot.style.transform = `rotate(${s * 6}deg)`;
    // 360 / 60 = 6
})