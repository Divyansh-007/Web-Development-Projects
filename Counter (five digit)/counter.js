var countInterval;


function startCounter() {
    
    var target = parseInt(document.getElementById("target_value").value);
    
    if(isNaN(target)) {
        alert("Please enter a number");
        clearInterval(countInterval);   // This is important for the condition when a counter is running and you entered a wrong input for a new counter
        return;
    }
    if(target < 1 || target > 99999) {
        alert("Range out of bounds");
        clearInterval(countInterval);
        return;
    }
    
    var current = document.querySelectorAll(".count .current");
    var next = document.querySelectorAll(".count .next");
    var count = 0;
    
    // If user clicks on 'Start Counter' button again - remove this function and below line if you don't consider this situation
    resetNumbers(current, next, 5);
    
    // Clears the previous interval that was running
    clearInterval(countInterval);
    
    countInterval = setInterval(function() {
        if(count === target) {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }
        increaseCount(current, next, 4);
        count++;
    }, 1000);

}


function resetNumbers(current, next, end) {
    for(var i=0; i<end; ++i) {
        current[i].innerText = 0;
        next[i].innerText = 1;
    }
}



function increaseCount(current, next, index) {
    
    let curr = current[index];
    let nex = next[index];
    
    if(curr.innerText == 9) {
        increaseCount(current, next, index-1);
    }
    
    nex.classList.add("animate");
    
    setTimeout(function() {
        curr.innerText = nex.innerText;
        nex.classList.remove("animate");
        nex.innerText = parseInt(nex.innerText) + 1;
        if(nex.innerText > 9) {
            nex.innerText = 0;
        }
    }, 500);
    
}