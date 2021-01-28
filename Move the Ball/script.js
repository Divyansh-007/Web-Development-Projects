var ball = document.getElementById('inner');

document.addEventListener("keypress", function (event) {
    var comm = event.key;
    var top = parseFloat(ball.offsetTop);
    var left = parseInt(ball.offsetLeft);
   
    if (comm === "w" || comm === "W") {
        if (top > 1) {
            ball.style.top = top - 5 + "px";
        }
    }else if (comm === "a" || comm === "A") {
        if (left > 1) {
            ball.style.left = left - 5 + "px";
        }
    }else if (comm === "s" || comm === "S") {
        if (top < 376) {
            ball.style.top = top + 5 + "px";
        }
    }else if (comm === "d" || comm === "D") {
        if (left < 830) {
            ball.style.left = left + 5 + "px";
        }
    }
});

