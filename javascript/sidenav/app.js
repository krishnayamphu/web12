let myNav = document.getElementById("myNav");
let btnOpen = document.getElementById("btnOpen");
let btnClose = document.getElementById("btnClose");

btnOpen.addEventListener("click", function () {
    myNav.style.display = "block";
    btnOpen.style.display = "none";
    btnClose.style.display = "block";
});

btnClose.addEventListener("click", () => {
    myNav.style.display = "none";
    btnClose.style.display = "none";
    btnOpen.style.display = "block";
});