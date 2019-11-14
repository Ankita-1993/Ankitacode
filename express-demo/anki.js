const express = require('express');
const app= express();
app.use(express.json());

const users = [
    {id:1, name: 'user1'},
    {id:2, name: 'user2'},
    {id:3, name: 'user3'},
];
function delay() {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        }, 5000);
    });
    return promise;
}

function insert(username) {
    delay().then(() =>{
        const user = {
            id: users.length + 1,
            name: username
        };
        users.push(user);

        return user;   
    });
        
}

app.post('/api/users', (req, res)=> {
    insert().then(users => {
        res.send(users);
    })
    
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on port ${port}..`))
