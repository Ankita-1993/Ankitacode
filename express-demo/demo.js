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

async function update(users) {
    await delay();
    const userdb = users.find(c => c.id === parseInt(users.id));
    return userbd;
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
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`surver is running on port ${port}..`))
