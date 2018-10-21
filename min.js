function myFunction() {
    var x = document.getElementById("photos");
    if (x.className === "photos") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}