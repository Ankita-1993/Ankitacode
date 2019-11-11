import { promises } from "fs";

const post = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        post.forEach((post, index) => {
            output += `<li>${post.title}</li>`;

        })
        document.body.innerHTML = output;
    }, 1000);
}

function createpost(post) {
    return new promises((resolve, reject) => {
        setTimeout(() => {
            post.push(post);

            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('Error: somthing went wrong')
            }

        }, 2000);
    })
}

createpost({title: 'Post Three', body: 'This is post three'}).then (getPosts);