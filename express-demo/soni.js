function one() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('one');
        }, 3000);
    });
}
one()
.then((msg)=> {
    console.log('this msg : ', msg);
})
