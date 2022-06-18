// Create a function that takes an array of objects (groceries) 
// which calculates the total price and returns it as a number. 
// A grocery object has a product, a quantity and a price

// https://edabit.com/challenge/jRSST87NjECBzbwzL
/*
const getTotalPrice = (groceries) => {
    const total = groceries.reduce((curr, acc) => {
        return curr + (acc.quantity * acc.price)
    }, 0)
    // return total
    console.log(parseFloat(total.toFixed(1))); 
}

// 1 bottle of milk:
getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 }
])
  
// Some cheap candy:
getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
])

*/

/*
// Write Your Own Version of Partition, Split an Array in Two

// https://edabit.com/challenge/3rGuRbe8nZ3mXdBRN

const users = [
    { 'user': 'barney',  'age': 36, 'active': false },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1,  'active': false }
];

const partition = (data, check) => {
    const all = [];
    const isActive = [];
    const notActive = [];

    isActive.push(data.filter( i => i.active === check.active ));
    notActive.push(data.filter( i => i.active !== check.active ));
    all.push(isActive, notActive);
    console.log(all)
}

partition(users, { 'active': false })

*/

/*
// Given an object that contains several adjectives as values, 
// return a new object where you count the ocurrences of each adjective.

// https://edabit.com/challenge/Mwryyhy2e8Gk9yrCh

const countNumberOfOccurrences = (obj) => {  // O(n^2)

    // get each value in object in custom Array
    const newArr = Object.entries(obj)
    const customArr = []
    for(let i = 0; i < newArr.length; i++){
        customArr.push(newArr[i].pop())
    }
    
    // looping this custom Array to find the repeated element
    // making object (key = element name, value = n.of repeatation)
    let key = 0;
    let newObj = {}
    for(let i = 0; i < customArr.length; i++){
        for(let j = 0; j < customArr.length; j++){
            if(customArr[i] === customArr[j]){
                key++; 
                newObj[customArr[i]] = key
            }
        }
        key = 0
    }

    // return newObj
    console.log(newObj);
}

countNumberOfOccurrences({
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot",
}) //{ moron: 2, scumbag: 1, idiot: 2 }

*/

/*

// Given an object with three rounds, with nested objects as your scores per round
// return a string of who cursed the most:
// If you, return "ME!"
// If your spouse, return "SPOUSE!"
// If a draw, return "DRAW!"

// https://edabit.com/challenge/SvodRRbyv7g3LxZsK

const determineWhoCursedTheMost = (obj) => {
    // convert Object to Array for Looping!
    const customArr = Object.values(obj)
    console.log(customArr)
    let me = 0;
    let spouse = 0;
    for( let i = 0; i < customArr.length; i++ ) {
        me += customArr[i].me;
        spouse += customArr[i].spouse;
    }

    // get point for all opponents
    console.log({me, spouse});

    // make comparing
    if( me > spouse ) { 
        // return "ME!"
        console.log("ME!")
    } else if ( me < spouse ) {
        // return "SPOUSE!"
        console.log("SPOUSE!")
    } else {
        // return "DRAW!"
        console.log("DRAW!")
    }
}

determineWhoCursedTheMost({
    round1: {
      me: 10,
      spouse: 5,
    },
    round2: {
      me: 5,
      spouse: 10,
    },
    round3: {
      me: 10,
      spouse: 10,
    },
}) // "DRAW!"

determineWhoCursedTheMost({
    round1: {
      me: 40,
      spouse: 5,
    },
    round2: {
      me: 9,
      spouse: 10,
    },
    round3: {
      me: 9,
      spouse: 10,
    },
}) // "ME!"
  
  
determineWhoCursedTheMost({
    round1: {
      me: 10,
      spouse: 5,
    },
    round2: {
      me: 9,
      spouse: 44,
    },
    round3: {
      me: 10,
      spouse: 55,
    },
}) // "SPOUSE!"

*/

// You are given two arguments, one object with nested objects and a string that 
// corresponds to your name. The object already contains several signature properties, 
// one on the root, the others on each nested object. 
// Return an object with all containing signature values set to your name.

// https://edabit.com/challenge/xrsiqZKrMoT2skt9i

const signAll = (obj, name ) => {
    for( key in obj) {
        if( obj[key] === '' ) {
            obj[key] = name
        }
        for ( nested in obj[key] ){
            if( obj[key][nested] === '' ) {
                obj[key][nested] = name
            }
        }
    }
    console.log(obj);
}


const obj = {
    kitchen: {
      painting: 100,
      piano: 1000,
      signature: "",
    },
    bathroom: {
      stereo: 220,
      signature: "",
    },
    signature: "",
};
signAll (obj, "sadek" )