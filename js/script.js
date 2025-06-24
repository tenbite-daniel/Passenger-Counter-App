const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveCount = document.getElementById("save-btn");
const saveEl = document.getElementById("previous-el");

let count = 0;

function incrementfun() {
    count += 1;
    countEl.textContent = count;
}
function save() {
    let countString = " " + count + " - ";
    saveEl.textContent += countString;
    count = 0;
    countEl.textContent = 0;
}

incrementBtn.addEventListener("click", incrementfun);
saveCount.addEventListener("click", save);
