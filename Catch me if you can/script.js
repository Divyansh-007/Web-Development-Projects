function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

var inner = document.getElementById('inner');

inner.addEventListener('mouseover',function(){
    var top_value = getRandomArbitrary(0,80);
    var left_value = getRandomArbitrary(0,90);
    inner.style.top = top_value + "%";
    inner.style.left = left_value + "%";
});