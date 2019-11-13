const express = require('express');
const app = express();
app.use(express.json());


const users = [
    {id: 1, name: "user1"},
    {id: 2, name: "user2"},
    {id: 3, name: "user3"},
];

function delay() {
    const promise =new Promise(function(resolve,reject) {
        setTimeout(function() {
            resolve()
        }, 5000);
    });
    return promise;
}
async function insert(username) {
    await delay();
    const user = {
        id: users.length + 1,
        name: username
    };
    users.push(user);
}

app.post('/api/users', (req, res) => {
    insert(req.body.name).then(insertedUser => {
        res.send(users);

    })
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`surver is running on ${port}....`));