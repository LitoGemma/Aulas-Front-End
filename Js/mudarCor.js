var btnLight = document.querySelector(".btn-light");
var btnDark = document.querySelector(".btn-dark");
var body = document.querySelector("body");
var section = document.querySelectorAll("section");
var navLinks = document.querySelectorAll(".navbar a");
var footer = document.querySelector("footer");

btnDark.addEventListener("click", function() {
    body.style.background = "black";
    body.style.color = "white";
    btnDark.style.display = "none";
    btnLight.style.display = "block";
    body.data-bs-theme = "dark";

    navLinks.forEach(function(link) {
        link.style.setProperty ("color", "white", "important");
    });

    section.forEach(function(sec) {
        sec.style.backgroundColor = "rgb(241, 166, 213, 0.4)"
    });

    footer.style.backgroundColor = "rgb(241, 166, 213, 0.4)"
  

});

btnLight.addEventListener("click", function() {
    body.style.background = "white";
    body.style.color = "black";
    btnDark.style.display = "block";
    btnLight.style.display = "none";
    body.data-bs-theme = "light";


    navLinks.forEach (function(link) {
        link.style.setProperty ("color", "black", "important");
    });

    section.forEach(function(sec) {
        sec.style.backgroundColor = "rgb(248, 162, 149)"
    }); 

    footer.style.backgroundColor = "rgb(248, 162, 149)"
   


});

