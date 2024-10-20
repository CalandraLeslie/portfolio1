// This event listener ensures that the DOM content is fully loaded before executing the code.
document.addEventListener('DOMContentLoaded', function () {

    // Object representing a simple todo manager
    let todoManager = {
        // DOM elements used by the todo manager
        taskInput: document.getElementById('taskInput'),
        addTaskBtn: document.getElementById('addTaskBtn'),
        errorMessage: document.getElementById('errorMessage'),
        todoList: document.getElementById('todoList'),
        completedList: document.getElementById('completedList'),
        resetBtn: document.getElementById('resetBtn'),

        // Initialization function for setting up event listeners
        init: function () {
            this.addTaskBtn.addEventListener('click', this.addTodo.bind(this));
            this.resetBtn.addEventListener('click', this.resetTasks.bind(this));
        },

        // Function to add a new todo task
        addTodo: function () {
            let taskDescription = this.taskInput.value.trim();

            if (taskDescription !== '') {
                let task = this.createTaskElement(taskDescription);
                this.todoList.appendChild(task);
                this.taskInput.value = '';
                this.errorMessage.textContent = '';
            } else {
                this.showErrorMessage('Please fill in a task before adding!');
            }
        },

        // Function to create a new task element
        createTaskElement: function (description) {
            let listItem = document.createElement('li');
            let taskTextField = document.createElement('input');
            let editButton = this.createButton('Edit', this.toggleTaskEdit);
            let completeButton = this.createButton('Complete', this.moveCompleted);
            let deleteButton = this.createButton('Delete', this.removeTask);

            taskTextField.type = 'text';
            taskTextField.value = description;
            taskTextField.disabled = true;

            listItem.appendChild(taskTextField);
            listItem.appendChild(editButton);
            listItem.appendChild(completeButton);
            listItem.appendChild(deleteButton);

            return listItem;
        },

        // Function to create a button with a specified text and click handler
        createButton: function (text, clickHandler) {
            let button = document.createElement('button');
            button.textContent = text;
            button.addEventListener('click', clickHandler.bind(this));
            return button;
        },

        // Function to toggle the edit mode for a task
        toggleTaskEdit: function (event) {
            let listItem = event.target.closest('li');
            let taskTextField = listItem.querySelector('input');

            if (taskTextField.value.trim() !== '') {
                taskTextField.disabled = !taskTextField.disabled;
            } else {
                this.showErrorMessage('You cannot edit an empty task.');
            }
        },

        // Function to move a completed task to the completed list
        moveCompleted: function (event) {
            let listItem = event.target.closest('li');
            let taskTextField = listItem.querySelector('input');

            if (taskTextField.value.trim() !== '') {
                listItem.removeChild(listItem.childNodes[2]);
                this.completedList.appendChild(listItem);
            } else {
                this.showErrorMessage('Cannot complete an empty task.');
            }
        },

        // Function to remove a task
        removeTask: function (event) {
            let listItem = event.target.closest('li');
            listItem.parentNode.removeChild(listItem);
        },

        // Function to reset all tasks and input fields
        resetTasks: function () {
            this.todoList.innerHTML = '';
            this.completedList.innerHTML = '';
            this.taskInput.value = '';
        },

        // Function to display an error message for a specified duration
        showErrorMessage: function (message) {
            this.errorMessage.textContent = message;

            setTimeout(function () {
                this.errorMessage.textContent = '';
            }.bind(this), 3000);
        },
    };

    // Initialize the todo manager
    todoManager.init();
});
