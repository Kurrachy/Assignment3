// Kamran Kamiran

/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dailyCharge = 35; 
let totalWeeklyCharge = 0;
let daysCount = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
const mondayBtn = document.getElementById("monday");
mondayBtn.addEventListener("click", function() {
    toggleDay(mondayBtn);
});

const tuesdayBtn = document.getElementById("tuesday");
tuesdayBtn.addEventListener("click", function() {
    toggleDay(tuesdayBtn);
});

const wednesdayBtn = document.getElementById("wednesday");
wednesdayBtn.addEventListener("click", function() {
    toggleDay(wednesdayBtn);
});

const thursdayBtn = document.getElementById("thursday");
thursdayBtn.addEventListener("click", function() {
    toggleDay(thursdayBtn);
});

const fridayBtn = document.getElementById("friday");
fridayBtn.addEventListener("click", function() {
    toggleDay(fridayBtn);
});

function toggleDay(day) {
    day.classList.toggle("active");
    computeTotalCharge();
}

function updateActiveDays() {
    daysCount = 0;
    [mondayBtn, tuesdayBtn, wednesdayBtn, thursdayBtn, fridayBtn].forEach(btn => {
        if (btn.classList.contains("active")) daysCount++;
    });
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
const resetBtn = document.getElementById("clear-button");
resetBtn.addEventListener("click", function() {
    totalWeeklyCharge = 0;
    daysCount = 0;
    costDisplay.innerText = totalWeeklyCharge;
    [mondayBtn, tuesdayBtn, wednesdayBtn, thursdayBtn, fridayBtn].forEach(btn => {
        btn.classList.remove("active");
    });
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
const halfDayBtn = document.getElementById("half");
halfDayBtn.addEventListener("click", function() {
    changeRate(20);
});

const fullDayBtn = document.getElementById("full");
fullDayBtn.addEventListener("click", function() {
    changeRate(35);
});

function changeRate(rate) {
    dailyCharge = rate;
    halfDayBtn.classList.toggle("active", rate === 20);
    fullDayBtn.classList.toggle("active", rate === 35);
    computeTotalCharge();
}


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
const costDisplay = document.getElementById("calculated-cost");

function computeTotalCharge() {
    updateActiveDays();
    totalWeeklyCharge = daysCount * dailyCharge;
    costDisplay.innerHTML = totalWeeklyCharge;
}