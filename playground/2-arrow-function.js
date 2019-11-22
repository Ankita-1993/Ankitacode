

// const square = function(x) {
//     return x*x
// }

// const square = (x) => x*x
// console.log(square(3))

const event = {
    name: 'Birthday party',
    guestlist: ['ankita', 'abhay', 'soni'],
    printGuestlist() {
        console.log('guest list for ' + this.name);
        console.log(this.guestlist + ' are attanding ' + this.name)
    }

}
event.printGuestlist()
