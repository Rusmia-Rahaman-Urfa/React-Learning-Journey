
const addButton = document.querySelector('button');
const inputField = document.querySelector('input[type="text"]');
const todoList = document.querySelector('ul');

addButton.addEventListener('click', function() {
   
    const todoText = inputField.value.trim();

    // Check if the input is not empty
    if (todoText !== '') {
        const newListItem = document.createElement('li'); //  Create a new list item (<li>)
        newListItem.textContent = todoText;

        
        newListItem.addEventListener('click', function() {
            // Remove the clicked list item
            todoList.removeChild(newListItem);
        });

        
        todoList.appendChild(newListItem);

        // 6. Clear the input field
        inputField.value = '';

        //  focus back on the input field for quick adding
        inputField.focus();
    } else {
        alert("Please enter a task before clicking 'Add'.");
    }
});

inputField.addEventListener('keydown', function(event) {
    // Check if the key pressed is the 'Enter' key 
    if (event.key === 'Enter') {
        // Prevent the default form submission 
        event.preventDefault(); 
        addButton.click();
    }
});