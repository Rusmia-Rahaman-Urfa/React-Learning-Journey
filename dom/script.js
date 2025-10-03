// script.js

// 1. Get the necessary HTML elements
const addButton = document.querySelector('button');
const inputField = document.querySelector('input[type="text"]');
const todoList = document.querySelector('ul');

// 2. Listen for a click event on the "Add" button
addButton.addEventListener('click', function() {
    // Get the text from the input field and trim whitespace
    const todoText = inputField.value.trim();

    // Check if the input is not empty
    if (todoText !== '') {
        // 4. Create a new list item (<li>)
        const newListItem = document.createElement('li');
        newListItem.textContent = todoText;

        // Optionally, add a feature to remove the item when clicked (good practice for a to-do list)
        newListItem.addEventListener('click', function() {
            // Remove the clicked list item
            todoList.removeChild(newListItem);
        });

        // 5. Append the new list item to the unordered list (<ul>)
        todoList.appendChild(newListItem);

        // 6. Clear the input field
        inputField.value = '';

        // Optional: Put focus back on the input field for quick adding
        inputField.focus();
    } else {
        // Alert the user if they try to add an empty task
        alert("Please enter a task before clicking 'Add'.");
    }
});

// Optional: Allow adding a task by pressing the 'Enter' key in the input field
inputField.addEventListener('keydown', function(event) {
    // Check if the key pressed is the 'Enter' key (key code 13 is often used, but 'key' is more modern)
    if (event.key === 'Enter') {
        // Prevent the default form submission behavior if it were in a <form>
        event.preventDefault(); 
        // Trigger the click event on the 'Add' button
        addButton.click();
    }
});