function hello() {
    document.write("<hr>hello");
}

hello()

// const slider = document.getElementById("slider");
// slider.addEventListener("input", function () {
//     document.getElementById("v").innerHTML = slider.value;
// });


function setValue() {
    const slider = document.getElementById("slider");
    document.getElementById("v").innerHTML = slider.value;
}
