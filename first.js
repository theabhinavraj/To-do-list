let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value === "") {
        alert("Please enter a task");
    } else {
        let newEle = document.createElement("li"); // Create a list item
        newEle.innerHTML = `${inputs.value} <i class="fa-light fa-trash" onclick="removeTask(this)"></i>`; // Use backticks for template literals

        text.appendChild(newEle);
        inputs.value = "";
    }
}

function removeTask(element) {
    // Remove the task from the list
    element.parentElement.remove();
}
