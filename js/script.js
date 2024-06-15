document.addEventListener("DOMContentLoaded", function () {
  setupEventListeners();
});

let today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();

let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let startYear = currentYear - 5;
let endYear = currentYear + 5;

let createYear = generate_year_range(startYear, endYear);
selectYear.innerHTML = createYear;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let tasks = [];
let taskIdCounter = 1;
let taskList = document.getElementById("taskList");
let noTaskMessage = document.getElementById("noTaskMessage");
let monthAndYear = document.getElementById("monthandyear");

function setupEventListeners() {
  let inputDate = document.getElementById("dateInput");
  inputDate.addEventListener("focus", function () {
    this.type = "datetime-local";
  });
  inputDate.addEventListener("blur", function () {
    if (this.value === "") {
      this.type = "text";
    }
  });
}

function addTask() {
  let taskName = document.getElementById("textInput").value;
  let taskDate = document.getElementById("dateInput").value;

  if (taskName === "" || taskDate === "") {
    alert("You haven't entered anything!");
    return;
  }

  let taskId = taskIdCounter++;

  tasks.push({ id: taskId, date: taskDate, name: taskName });

  showCalendar(currentMonth, currentYear);
  document.getElementById("textInput").value = "";
  document.getElementById("dateInput").value = "";
  document.getElementById("dateInput").type = "text";
  taskDisplay();
}

function taskDisplay() {
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    let taskDate = new Date(task.date);
    if (
      taskDate.getMonth() === currentMonth &&
      taskDate.getFullYear() === currentYear
    ) {
      let listItem = document.createElement("li");

      let formattedDate = formatTaskDate(taskDate);

      listItem.innerHTML = `<strong>${task.name}</strong> on ${formattedDate}`;
      listItem.classList.add("taskclass");
      taskList.appendChild(listItem);
    }
  }

  updateNoTaskMessageDisplay();
}

function updateNoTaskMessageDisplay() {
  noTaskMessage.style.display = taskList.children.length > 0 ? "none" : "block";
}

function formatTaskDate(date) {
  let day = pad(date.getDate());
  let month = pad(date.getMonth() + 1);
  let year = date.getFullYear();
  let hours = pad(date.getHours());
  let minutes = pad(date.getMinutes());

  return `${day}/${month}/${year} at ${hours}:${minutes}`;
}

function pad(number) {
  return (number < 10 ? "0" : "") + number;
}

function generate_year_range(start, end) {
  let years = "";
  for (let year = start; year <= end; year++) {
    years += "<option value='" + year + "'>" + year + "</option>";
  }
  return years;
}

function tableHeader(daysArray) {
  let dataHead = "<tr>";
  daysArray.forEach(function (day) {
    dataHead += "<th data-days='" + day + "'>" + day + "</th>";
  });
  dataHead += "</tr>";
  return dataHead;
}

document.getElementById("thead-month").innerHTML = tableHeader(days);
showCalendar(currentMonth, currentYear);

function next() {
  if (currentYear < endYear || (currentYear === endYear && currentMonth < 11)) {
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
  }
}

function previous() {
  if (
    currentYear > startYear ||
    (currentYear === startYear && currentMonth > 0)
  ) {
    currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
  }
}

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
  let firstDay = new Date(year, month, 1).getDay();
  let tbl = document.getElementById("calendar-body");
  tbl.innerHTML = "";
  monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month;

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth(month, year)) {
        break;
      } else {
        let cell = document.createElement("td");
        cell.setAttribute("data-date", date);
        cell.setAttribute("data-month", month + 1);
        cell.setAttribute("data-year", year);
        cell.setAttribute("data-month_name", months[month]);
        cell.className = "date-picker";
        cell.innerHTML = "<span>" + date + "</span";

        if (
          date === today.getDate() &&
          year === today.getFullYear() &&
          month === today.getMonth()
        ) {
          cell.className = "date-picker selected";
        }
        if (hasTaskOnDate(date, month, year)) {
          cell.classList.add("task-marker");
          let tooltip = createTaskTooltip(date, month, year);
          cell.appendChild(tooltip);
        }

        row.appendChild(cell);
        date++;
      }
    }
    tbl.appendChild(row);
  }

  taskDisplay();
}

function createTaskTooltip(date, month, year) {
  let tooltip = document.createElement("div");
  tooltip.className = "task-tooltip";
  let tasksOnDate = getTasksOnDate(date, month, year);
  for (let i = 0; i < tasksOnDate.length; i++) {
    let task = tasksOnDate[i];
    let taskDate = new Date(task.date);
    let taskText = `<strong>${task.name}</strong> on 
            ${formatTaskDate(taskDate)}`;
    let taskElement = document.createElement("p");
    taskElement.innerHTML = taskText;
    tooltip.appendChild(taskElement);
  }
  return tooltip;
}

function getTasksOnDate(date, month, year) {
  return tasks.filter(function (task) {
    let taskDate = new Date(task.date);
    return (
      taskDate.getDate() === date &&
      taskDate.getMonth() === month &&
      taskDate.getFullYear() === year
    );
  });
}

function hasTaskOnDate(date, month, year) {
  return getTasksOnDate(date, month, year).length > 0;
}

function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}

showCalendar(currentMonth, currentYear);
