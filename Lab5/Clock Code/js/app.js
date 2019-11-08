"use strict"

/*function display_interval() {
    let mytime;
    //let refresh = 1000;
    mytime = setTimeout(() => {
        let date = new Date();
        document.getElementById('clock').innerHTML = date;
    }, 1000);
}*/
function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    let mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
    let x = new Date()
    let x1 = x.getFullYear() + "-" + (x.getMonth() + 1) + "-" + x.getDate();
    let x2 = x1 + " " + x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
    document.getElementById('clock').innerHTML = x2;
    display_c();
}