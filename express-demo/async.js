const express = require('express');
const app = express();
app.use(express.json());

const users = [
    {id:1, name: "user1"},
    {id:2, name: "user2"},
    {id:3, name: "user3"},
];
function delay() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
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
app.post('/api/users', async(req, res) => {
    const inserteduser = await insert(req.body.name);
        res.send(users);
});

async function update(user) {
    await delay();
    const userdb = users.find(c => c.id === parseInt(user.id));
    return userdb;
}

app.put('/api/users/:id', async(req, res) => {
    const user = {
        id: req.params.id,
        name: req.body.name
    }
    const updateduser = await update(user)
        res.send(user);
    
});
async function remove(user) {
    await delay();
    const userdb = users.find(c => c.id === parseInt(user.id));
    return userdb;
}
app.delete('/api/users/:id', async(req, res) => {
    const user = {
        id: req.params.id,
        name: req.body.name
    }
    const removeduser = await remove(user)
        res.send(user)
});
async function read(user) {
    await delay();
    const userdb = users.find(c => c.id === parseInt(user.id));
    return userdb;
}
app.get('/api/users/:id', async(req, res) => {
    const user = {
        id: req.params.id,
        name: req.body.name
    }
    const readuser = await read(user)
    res.send(users)
    
});

const port = process.env.PORT ||3000;
app.listen(port, () => console.log(`server is running on ${port}...`));