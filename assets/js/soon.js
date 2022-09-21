const countDate = new Date("Jan 10 2023 14:30:55").getTime();

var x = setInterval(function(){
    let now = Date().getTime();

    let distance = countDate - now;

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((distance % (1000 * 60 * 60)) / 1000);

    document.getElementById('timer').innerHTML = d + "d " + hrs + "h " + min + "m " + sec + "s ";

})