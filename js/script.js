// Tugas 1
// Bikin bisa input 1 nilai dan nilai itu jadi tangga bintang berdasarkan nilai input
// Contoh:
// Input: 5
// Output:
// *
// **
// ***
// ****
// *****
//
// Input: 3
// Output:
// *
// **
// ***


// var variableName = "Halo"
// Tipe Data
// int - integer - bilangan bulat
// -1 0 1 2 3 4 5 6 ...
var umur = 22
// float/double
// 0.5432563 1.3164231
var nilai = 0.54
// string
// "ntahoeunsateouh"
var nama = "halo"
// char - character
var nilaiHuruf = 'A'
// bool - boolean (true/false)
var isThisFunctionWorking = true

// const - constant
const IS_WEBSITE = true


// Array -> Vector
//                    0 . 1 . 2  3 .  4 . 5
let NilaiMahasiswa = [10, 30, 40, 50, 20, 60];

let nilaiOdie = NilaiMahasiswa[1];
NilaiMahasiswa[1] = 100;

// Object

// Debugging
// Debugging javascript website with vs code
console.log("")

// Percabangan
// >
// >=
// <=
// <
// ! = NOT
if((IS_WEBSITE && isThisFunctionWorking) && umur > 10){
    console.log("Halo")
}
else if(IS_WEBSITE || isThisFunctionWorking){
    console.log("Halo 1")
}
else{
    console.log("Halo 2")
}

switch(nilaiHuruf){
    case 'A':
        console.log("Umur anda 18");
        break;
    case 'B':
        console.log("Umur anda 18");
        break;
    default:
        console.log("Anda tidak lulus");
        break
}

// Perulangan / Loops
// variableName++ - increment = menambah nilai dengan 1
// variableName-- - decrement = mengurangi nilai dengan 1
let x = 1;
console.log(x); // 1
x = 3;
console.log(x); // 3
x++
console.log(x); // 4
x--
console.log(x); // 3
x = 100
console.log(x); // 100
x = x + 10
console.log(x); // 110
x++
x = x + 1
x += 100
x += 100
x--
x = x - 1
x -= 100
x /= 100
x *= 100

// (initialization; condition; increment/decrement)
for(let i = 0; i < 1000; i++){
    console.log("Alif");
}

while(IS_WEBSITE){
    
    // logika bisnis
    if(entahApa){
        IS_WEBSITE = false
    }
}

// function/procedure
//
// define function
// function functionName() {}
//
// call function
// functionName()

// when defining a new function it's called a parameter
function newFunction(params1, params2) {
    
}

// newFunction
// when calling a function it's called an argument
newFunction(1, 2)

function addNumber(x, y) {
    return x + y;
}

let result = addNumber(1, 10);
console.log(result) // 11

function printAddNumber(x, y) {
    console.log(addNumber(x, y));
}

let result2 = printAddNumber(11, 10);
console.log(result2) // kosong

function addTask() {
    var taskName = document.getElementById("taskName").value;
    var taskDate = document.getElementById("taskDate").value;
    var taskTime = document.getElementById("taskTime").value;

    if (taskName === "" || taskDate === "" || taskTime === "") {
        alert("Please enter task, date, and time.");
        return;
    }

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.className = "taskItem";

    // Concatenate date and time into a single datetime string
    var taskDateTime = taskDate + "T" + taskTime;

    // Parse taskDateTime into a Date object
    var dateTimeObject = new Date(taskDateTime);

    getDate()

    // Extract hours and minutes from taskTime
    var taskTimeParts = taskTime.split(":");
    var hours = taskTimeParts[0];
    var minutes = taskTimeParts[1];

    // Format the time in AM/PM or according to the user's locale settings
    var formattedTime = dateTimeObject.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });

    // Format the date as DD/MM/YYYY
    var formattedDate = `${day}/${month}/${year}, ${formattedTime}`;

    // Create task item HTML
    li.innerHTML = "<div class='taskNameDate'><span class='taskName'>" + taskName + "</span><span class='taskDateTime'>" + formattedDate + "</span></div><div><button onclick='removeTask(this)'>Remove</button></div>";

    // Find the correct position to insert the new item based on date order
    var insertBeforeElement = null;
    for (var i = 0; i < taskList.children.length; i++) {
        var listItemDate = taskList.children[i].getAttribute("data-date");
        if (listItemDate && taskDateTime < listItemDate) {
            insertBeforeElement = taskList.children[i];
            break;
        }
    }

    // Insert the new item before the found element (or at the end if not found)
    taskList.insertBefore(li, insertBeforeElement);

    // Clear input fields
    document.getElementById("taskName").value = "";
    document.getElementById("taskDate").value = "";
    document.getElementById("taskTime").value = "";
}

function removeTask(element) {
    // Navigate up the DOM tree to find the parent <li> element
    var listItem = element.closest('li');
    
    if (listItem) {
        // Remove the parent <li> element if found
        listItem.remove();
    } else {
        console.error("Parent <li> element not found.");
    }
}


// For the Time of the Day on top of the Task Bar //
window.onload = function() {
    var currentDate = new Date();
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayOfWeek = daysOfWeek[currentDate.getDay()];
    var dateString = "Hi, Alif! Today is " + dayOfWeek + ", " + currentDate.toLocaleDateString();
    document.getElementById("date").innerHTML = dateString;
};
