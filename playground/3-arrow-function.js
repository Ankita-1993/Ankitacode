const tasks = {
    tasks: [{
        text: 'grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film Course',
        completed: false

    }],
    getTasksToDo() {
        return this.tasks.filter((task) => task.completed === false)
        
    }

}
console.log(tasks.getTasksToDo())