$(function() {
    $("#nav-placeholder").load("header.html");
    $("#nav-footer").load("footer.html");
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     var x = document.getElementById("container");
//     x.className += " noDisplay";
// }