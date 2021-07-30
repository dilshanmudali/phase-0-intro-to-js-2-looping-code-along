// Code your solutions in this file

// for (let age = 30; age < 40; age++){
//     console.log(`i'm ${age} years old. Happy birthday to me!`)
    
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts); 

function writeCards(nameArray, eventName){
    let newArray = []
    for (let i = 0; i < nameArray.length; i++){
        newArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`) 
    }
   return newArray
}


function countDown(n){
   
    while (n >= 0){
        console.log(n)
        n--
   }
    return countDown
}

countDown(10)