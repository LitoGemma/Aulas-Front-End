var btnLight = document.querySelector(".btn-light");
var btnDark = document.querySelector(".btn-dark");
var body = document.querySelector("body");
var section = document.querySelector("section");
var navLinks = document.querySelector(".navbar a");


btnDark.addEventListener("click", function() {
    body.style.background = 
    body.style.color = "white";
    btnDark.style.display = "none";
    btnLight.style.display = "block";


navLinks.forEach(function(link) {
    link.style.setProperty ("color", "white", "important")
});
})



btnLight.addEventListener("click", function() {
    body.style.background = 
    body.style.color = "black";
    btnDark.style.display = "block";
    btnLight.style.display = "none";


navLinks.forEach (function(link) {
    link.style.setProperty ("color", "black", "important")
});
})

