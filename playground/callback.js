// setTimeout(() => {
//     console.log('two seconds are up');
// }, 2000)
// const names = ['ankita', 'abhay', 'soni']
// const shortname = names.filter((name) => {
//     return name.length <= 4;
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 21,
//             longitude: 77
//         }
//         callback(data);
//     }, 2000)
// }
// geocode('india', (data) => {
//     console.log(data)
// }) 

const add = (num1, num2, callback) => {
    setTimeout(() => {
        const sum = (num1 + num2)
        callback(sum)
    }, 2000);
}
add(1, 4, (sum) => {
    console.log(sum)
})