const express = require('express');
const app = express();
app.use(express.json());

const users = [
    {id:1, name:'user1'},
    {id:2, name:'user2'},
    {id:3, name:'user3'},
];

function delay() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 5000);
    });
    return promise;
}

async function insert(username) {
    await delay();
    const userdb = {
        id: users.length + 1,
        name: username
    };
    users.push(userdb);
}

app.post('/api/users', (req, res) => {
    insert(req.body.name).then(insertedUser => {
        res.send(users);

    })
});

async function update(user) {
    await delay();
    const userdb = users.find(c => c.id === parseInt(user.id));
    return userdb;
}

app.put('/api/users/:id', (req, res) => {
    const user = {
        id: req.params.id,
        name: req.body.name
    }
    update(user).then(updateduser => {
        res.send(user)
    });
    
});

async function remove(user) {
    await delay();
    const userdb = users.find(c => c.id === parseInt(user.id));
    return userdb;
}
app.delete('/api/users/:id', (req, res) => {
    const index = users.indexOf(users);
    users.splice(index, 1);
    remove(index).then(removedindex => {
        res.send(users)
    });
});

async function read(user) {
    await delay();
    const userdb = users.find(c => c.id === parseInt(user.id));
    return userdb;
}
app.get('/api/users', (req, res) => {
    const user = {
        id: req.params.id,
    }
    read(user).then(readuser => {
        res.send(user)
    });
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on port ${port}..`))
