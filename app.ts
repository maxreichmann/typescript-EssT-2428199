enum MyStatus {
    done = "done",
    in_progress = "in_progress",
    todo = "todo",
}

interface Todo {
    id: number,
    title: string,
    status: MyStatus,
    completedOn?: Date,
}

const todoItems: Todo[] = [
    { id: 1, title: "Learn HTML", status: MyStatus.done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: MyStatus["in-progress"] },
    { id: 3, title: "Write the best app in the world", status: MyStatus.in_progress },
]

function addTodoItem(todo: string) {
    const id = getNextId<Todo>(todoItems)
    const newTodo: Todo = {
        id,
        title: todo,
        status: MyStatus.todo,
    }
    todoItems.push(newTodo)
    return newTodo
}

function getNextId<T>(items) {
    return items.length+1;
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))