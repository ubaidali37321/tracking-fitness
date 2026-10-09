
let steps = 0;
let water = 0;

function addSteps() {
    steps += 500;

    document.getElementById("steps").innerText = steps;
    document.getElementById("calories").innerText =
        Math.round(steps * 0.04);
}

function addWater() {
    water += 1;
    document.getElementById("water").innerText = water + " glasses";
}

function showMessage() {
    alert("Welcome to FitTrack! Start your fitness journey today.");
}