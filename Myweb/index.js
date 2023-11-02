const buttons = document.getElementById("buttons");
const confirmOrder = document.getElementById("confirmOrder");

// Add an event listener to the value selector
valueSelector.addEventListener("change", function () {
    const selectedValue = buttons.value;
    
    // Clear the existing options in the display dropdown
    displayDropdown.innerHTML = "orderedReceive.html";

    // Create a new option with the selected value and add it to the display dropdown
    const option = document.createElement("option");
    option.textContent = selectedValue;
    displayDropdown.appendChild(option);
});