const joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());

const users = [
    {id: 1, name: "user1"},
    {id: 2, name: "user2"},
    {id: 3, name: "user3"},
];

app.get('/', (req, res) => {
    res.send('my new home page');
});

app.get('/api/users', (req, res) => {
    res.send(users);
});

app.post('/api/users', (req, res) => {
    

    const user = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(user);
    res.send(user);
});

function delay() {
    const promise = new promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        }, 3000);
    });
    return promise;
}

app.delete('/api/users/:id', (req, res) => {
    const user =users.find(c => c.id === parseInt(req.params.id));
    if(!users) res.status(404).send('the user in given id is not found');

    const index = users.indexOf(user);
    users.splice(index, 1);
    res.send(user);

});
app.get('/api/users/:id', (req, res) => {
    const user =users.find(c => c.id === parseInt(req.params.id));
    if(!users) res.status(404).send('the user in given id is not found');
    res.send(user);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`surver is running on ${port}....`));