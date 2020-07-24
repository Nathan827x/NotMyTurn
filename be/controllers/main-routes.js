const TodoItems = require('../models/todo-item');

module.exports = function (app) {
    app.get('/TEST', function (req, res) {
        const RANDOM = new TodoItems();
        RANDOM.todo_description = "Hello"
        // console.debug(RANDOM)

        res.send('Hello World! This is a test')
    });

    app.post('/add', (req, res) => {
        console.log(req.body);
        res.send("This is where I would add info")
    });

    // TODO: Still need to figure out how I am going to handle completed tasks.
    // Should I DELETE them or just hide/archive them.

    app.get('/:id', (req, res) => {
        res.send("This is where you should get info by id")
    });

    app.post('/update/:id', (req, res) => {
        res.send("Update id " + req.params.id);
        // TODO: Find task by id
        // TODO: If it exists then we can update, if not, then return a 404
    });

    /**
     * Gets all todo items. This method may need to be removed when I create my own features.
     * Or we could use this for a backend test route to make sure it's up...
     */
    app.get('/', (req, res) => {
        // MOCK DATA
        const MockData = [{
            chore_name: "Dishes",
            todo_description: "This is the desc",
            todo_responsible: ["NOT ME", "Second person"],
        },
        {
            chore_name: "Mopping",
            todo_description: "This is the other desc",
            todo_responsible: ["person1", "person 2"],
        }]

        res.send(MockData)
    })

    //other routes..
}