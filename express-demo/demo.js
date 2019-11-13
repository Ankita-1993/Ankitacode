const express = require('express');
const app = express();
app.use(express.json());

const users = [
    {id:1, name:'user1'},
    {id:2, name:'user2'},
    {id:3, name:'user3'},
];

function delay(users) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 5000);
    });
    return promise;
}

async function fetch(users) {
    await delay()
    const user = users.find(c => c.id === parseInt(req.params.id));
}

app.get('/api/users/:id', (req, res) => {
    fetch(req.params.id).then(() => {
        res.send(users)
    })
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`surver is running on port ${port}..`))
