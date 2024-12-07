// Counter Program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increaseBtn");
const counterLabel = document.getElementById("Count Label")

let count = 0;

//Func
decreaseBtn.onclick = function(){
    count --;
    counterLabel.textContent = count;
}

increaseBtn.onclick = function(){
    count ++;
    counterLabel.textContent = count;
};

resetBtn.onclick = function(){
    count = 0
    counterLabel.textContent = count;
};



