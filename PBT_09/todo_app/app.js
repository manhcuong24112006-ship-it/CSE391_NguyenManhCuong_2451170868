const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const itemsLeft = document.getElementById("itemsLeft");
const clearCompletedBtn = document.getElementById("clearCompleted");
const filterBtns = document.querySelectorAll(".filter-btn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function updateCount() {
    const count = todos.filter(todo => !todo.completed).length;
    itemsLeft.textContent = `${count} items left`;
}

function renderTodos() {
    todoList.innerHTML = "";

    const filteredTodos = todos.filter(todo => {
        if (currentFilter === "active") {
            return !todo.completed;
        }

        if (currentFilter === "completed") {
            return todo.completed;
        }

        return true;
    });

    filteredTodos.forEach(todo => {
        const li = document.createElement("li");
        li.className = "todo-item";
        li.dataset.id = todo.id;

        const span = document.createElement("span");
        span.className = "todo-text";

        if (todo.completed) {
            span.classList.add("completed");
        }

        span.textContent = todo.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "❌";

        li.appendChild(span);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });

    updateCount();
    saveTodos();
}

function addTodo() {
    const text = todoInput.value.trim();

    if (!text) {
        return;
    }

    todos.push({
        id: Date.now(),
        text,
        completed: false
    });

    todoInput.value = "";

    renderTodos();
}

addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        addTodo();
    }
});

todoList.addEventListener("click", e => {
    const li = e.target.closest(".todo-item");

    if (!li) {
        return;
    }

    const id = Number(li.dataset.id);

    if (e.target.classList.contains("delete-btn")) {
        todos = todos.filter(todo => todo.id !== id);
    }

    if (e.target.classList.contains("todo-text")) {
        const todo = todos.find(todo => todo.id === id);

        todo.completed = !todo.completed;
    }

    renderTodos();
});

todoList.addEventListener("dblclick", e => {
    if (!e.target.classList.contains("todo-text")) {
        return;
    }

    const li = e.target.closest(".todo-item");
    const id = Number(li.dataset.id);

    const todo = todos.find(todo => todo.id === id);

    const input = document.createElement("input");
    input.type = "text";
    input.value = todo.text;
    input.className = "edit-input";

    li.replaceChild(input, e.target);

    input.focus();

    input.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            todo.text = input.value.trim() || todo.text;
            renderTodos();
        }
    });

    input.addEventListener("blur", () => {
        renderTodos();
    });
});

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(button =>
            button.classList.remove("active")
        );

        btn.classList.add("active");

        currentFilter = btn.dataset.filter;

        renderTodos();
    });
});

clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.completed);

    renderTodos();
});

renderTodos();