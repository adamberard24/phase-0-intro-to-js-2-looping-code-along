// Code your solutions in this file



function writeCards(name, event) {
    let buds = []
    for (let i = 0; i < name.length; i++) {
        buds.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    debugger
    }
    return buds;
}


function countDown() {
    let count = 10
    while (count >= 0) {
        console.log(count--)
    }
}