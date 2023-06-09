function getCurrentTime() {
    let currentTime = new Date();
    return `${currentTime.getHours()} : ${currentTime.getMinutes()} : ${currentTime.getSeconds()}`;
}
let timeHolder = document.getElementById('timeHolder');
function UpdateTime() {
    setInterval(() => {
        let timeToDisplay = getCurrentTime();
        timeHolder.innerHTML = timeToDisplay;
    }, 1000)
}
UpdateTime();

// Populate days in calendar


let monthHolder = document.getElementById('monthHolder');

let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let date = new Date();

function renderDaysInCalendar() {
    console.log(date);
    monthHolder.innerHTML = "";
    const tempDate = new Date(date.getTime());
    monthHolder.innerHTML += `${monthArr[tempDate.getMonth()]},${tempDate.getFullYear()}`;

    let endDate = new Date(
        tempDate.getFullYear(),
        tempDate.getMonth() + 1,
        0
    ).getDate();
    tempDate.setDate(1);
    let currentMonthStartingDay = tempDate.getDay();
    tempDate.setDate(endDate);
    let currentMonthEndingDay = tempDate.getDay();
    console.log("22222222         " + tempDate.getMonth())
    let mon = tempDate.getMonth() - 1;
    console.log("1111111111         " + tempDate.getMonth())
    let previousMonthEndingDate = new Date(
        tempDate.getFullYear(),
        mon + 1,
        0
    ).getDate();

    let dayHolder = document.getElementById('days');
    dayHolder.innerHTML = "";
    let counter = previousMonthEndingDate - currentMonthStartingDay + 1;

    let dateTest = new Date();
    let flagToMarkCurrentDate = false;
    if (tempDate.getFullYear() == dateTest.getFullYear() && tempDate.getMonth() == dateTest.getMonth()) {
        flagToMarkCurrentDate = true
    }
    for (let i = 0; i < currentMonthStartingDay; i++) {
        dayHolder.innerHTML += `<div style="color:grey">${counter}</div>`
        counter++;
    }

    for (let i = 1; i <= endDate; i++) {
        if (flagToMarkCurrentDate && i == dateTest.getDate()) {
            dayHolder.innerHTML += `<div style="background-color:cyan">${i}</div>`
        }
        dayHolder.innerHTML += `<div>${i}</div>`
    }
    let nextMonthCounter = 1
    for (let i = currentMonthEndingDay + 1; i < 7; i++) {
        dayHolder.innerHTML += `<div style="color:grey">${nextMonthCounter}</div>`;
        nextMonthCounter++;
    }

}

renderDaysInCalendar();



let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

prevButton.addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1)
    renderDaysInCalendar();
})
nextButton.addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderDaysInCalendar();
})

// Calendar code ends here




// Showing diiffernet tabs code start here
let panelButtons = document.getElementsByClassName('panelButton-div');
let panelElements = document.getElementsByClassName('tabElement')
console.log(panelButtons, panelElements)

Array.from(panelButtons).forEach(button => {
    console.log(button)
})
function showPanel(val) {
    let panelArr = Array.from(panelElements)
    panelArr.forEach((element) => {
        element.style.display = "none";
    })
    panelArr[val].style.display = "block"
    let panelButtonArray = Array.from(panelButtons)
    panelButtonArray.forEach((button) => {
        button.style.backgroundColor = "white"
    })
    panelButtonArray[val].style.backgroundColor = "grey"
}
showPanel(0);

//// Showing diiffernet tabs code start here