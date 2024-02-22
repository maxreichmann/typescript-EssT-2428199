var MyStatus;
(function (MyStatus) {
    MyStatus["done"] = "done";
    MyStatus["in_progress"] = "in_progress";
    MyStatus["todo"] = "todo";
})(MyStatus || (MyStatus = {}));
const todoItems = [
    { id: 1, title: "Learn HTML", status: MyStatus.done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: MyStatus["in-progress"] },
    { id: 3, title: "Write the best app in the world", status: MyStatus.in_progress },
];
function addTodoItem(todo) {
    const id = getNextId(todoItems);
    const newTodo = {
        id,
        title: todo,
        status: MyStatus.todo,
    };
    todoItems.push(newTodo);
    return newTodo;
}
function getNextId(items) {
    return items.length + 1;
}
const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app");
console.log(JSON.stringify(newTodo));
