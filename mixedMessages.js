//create a random number between 0 and 5
const randomNumGenerator = () =>{
    return Math.floor(Math.random()*5);
}

console.log(randomNumGenerator())

//array containig motivational quotes
const motivation = [
    "Dont't let yesterday take up too much today - Will Rodgers",
    "Experience is a hard teacher because she gives you the test first, the lesson afterwards - Vernon Sanders Law",
    "He who conquers himself is the mightiest warrior - Confucius",
    "Education is the most powerful weapon which you can use to change the world - Nelson Mandela",
    "Talent wins games, but teamwork and intelligence win championships - Michael Jordan"
]

//array containing jokes
const joke = [
    "My wife asked me to stop singing “Wonderwall” to her. I said maybe...",
    "What did Tennessee? The same thing as Arkansas",
    "Why is Peter Pan always flying? Because he Neverlands",
    "Sundays are always a little sad, but the day before is a sadder day",
    "Dogs can’t operate MRI machines. But catscan"
]

//function to choose between motivational quote or a joke
let chooseMessage = () =>{
    number = randomNumGenerator()
    while (number > 1) {
        number = randomNumGenerator()
    }
    return number
}

let message = () =>{
    let number = chooseMessage()
    if (number === 0){
        return motivation[randomNumGenerator()]
    }else if(number === 1){
        return joke[randomNumGenerator()]
    }
}

console.log(message())