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
    let mon = tempDate.getMonth() - 1;
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

Array.from(panelButtons).forEach(button => {
})
function showPanel(val) {
    let panelArr = Array.from(panelElements)
    panelArr.forEach((element) => {
        element.style.display = "none";
    })
    panelArr[val].style.display = "flex"
    let panelButtonArray = Array.from(panelButtons)
    panelButtonArray.forEach((button) => {
        button.style.backgroundColor = "white"
    })
    panelButtonArray[val].style.backgroundColor = "grey"
}
showPanel(0);

//// Showing diiffernet tabs code start here


//Calculate date code starts
let calculateAge = function () {
    let inputDate = document.getElementById('ageInputHtml')
    if (inputDate.value.toString() == '' || inputDate.value.toString() == undefined) {
        document.getElementsByClassName('ageCalOutputContainer')[0].innerHTML = "Please enter value";
        return;
    }
    let inputDateIntoArr = inputDate.value.toString().split('-')
    let birthDate = inputDateIntoArr[2];
    let birthMonth = inputDateIntoArr[1];
    let birthYear = inputDateIntoArr[0];

    let date = new Date();
    let todayDate = date.getDate();
    let todayMonth = date.getMonth() + 1;
    let todayYear = date.getFullYear();
    let dateDiff;
    let monthDiff;
    let yearDiff;
    // Calculate date difference
    if (todayDate >= birthDate) {
        dateDiff = todayDate - birthDate;
    }
    else {
        todayMonth--;
        let endDateOfMonth = getHighestDateInprevMonth(todayMonth, todayYear);
        dateDiff = endDateOfMonth + todayDate - birthDate;
    }
    // calculate month difference
    if (todayMonth >= birthMonth) {
        monthDiff = todayMonth - birthMonth;
    }
    else {
        todayYear--;
        monthDiff = 12 + todayMonth - birthMonth;

    }
    // calculate year  diff
    if (todayYear >= birthYear) {
        yearDiff = todayYear - birthYear;
    }

    console.log(yearDiff, monthDiff, dateDiff)
    document.getElementsByClassName('ageCalOutputContainer')[0].innerHTML = `${yearDiff} years ${monthDiff} months ${dateDiff} days `;


}

function getHighestDateInprevMonth(month, year) {
    return new Date(
        +year,
        +month,
        0
    ).getDate();
}