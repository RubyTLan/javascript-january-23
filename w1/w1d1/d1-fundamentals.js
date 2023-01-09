// ------------- Course Overview -------------

// ------------- Javascript history -------------

// ------------- Scope ------------

var beatles = ["Paul", "George", "John", "Ringo"];
function printNames(names) {
    function actuallyPrintingNames() {
        for (var index = 0; index < names.length; index++) {
        var name = names[index];
            console.log(name + " was found at index " + index);
        }
        console.log("name and index after loop is " + name + ":" + index);
    }
    actuallyPrintingNames();
}
// printNames(beatles);

// -------------- Const vs Let vs Var --------------
let food = "duck"
food = "Pizza"
// console.log(food)

for(let i = 0; i < 11; i++){
    // console.log(i)
}

const skills = ["debugging", "sleeping", "drinking coffee"]
// console.log(skills)
skills.push("Video games")
// console.log(skills)

skills[0] = "drinking"
// console.log(skills)

// -------------- Hoisting ------------


// -------------- Destructuring --------------
const post = {
    title: "First day of Javascript",
    viewers: 1000,
    likes: 500,
    description: "An awesome day of JS",
    hastags: ["excellent", "great", "fun"]
}
// console.log(post.title) //ES5
// console.log(post.viewers) //ES5
// console.log(post.likes) //ES5

const {title: newTitle, viewers, likes, description, hastags} = post
// console.log(newTitle, viewers, likes, description, hastags);

const trips = ["Japan", "Spain", "Bolivia", "Australia", "Colombia"]
const trips2 = ["Greece", "Argentina", "Brazil", "Italy"];
// console.log(trips)

const [first, ,third] = trips
// console.log(first)
// console.log(third)

// -------------- Spread / Rest --------------
const trip = [...trips, ...trips2, "Thailand"]
// console.log(trip)


// -------------- Arrow functions --------------
//ES5
function printHello(){
    console.log("Hello, Ruben")
}
// printHello()

//ES6
const printHello2 = () => {
    console.log("Hello, Ruben")
}
// printHello2()

function addPrice(price, discount){
    return price * discount
}
// console.log(addPrice(100, .09))

//long handed
const addPrice2 = (price, discount) => {
    return price * discount;
}
console.log(addPrice2(100, .09))

//short handed
const addPrice3 = (price, discount) => price * discount;
console.log(addPrice3(100, 0.09));

let addPrice4 = (price, discount) => (price * discount);
console.log(addPrice4(100, 0.09));

// -------------- Ternary functions --------------
