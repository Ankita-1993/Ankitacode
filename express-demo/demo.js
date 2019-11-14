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
    const user = users.find(c => c.id === parseInt(req.params.id));
    user.name = req.body.name;
    return user;
}

app.put('/api/users/:id', (req, res) => {
    update(req.body.name).then(updateduser => {
        res.send(users)
    })
        
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`surver is running on port ${port}..`))
