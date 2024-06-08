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
