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

async function read(users) {
    await delay();
    const user = users.find(c => c.id === parseInt(users.id));
    return user;
}
app.get('/api/users/:id', (req, res) => {
    read(users).then(readusers => {
        res.send(users)
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on port ${port}..`))
