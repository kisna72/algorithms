const problem = `
Given a function that generates perfectly random numbers between 1 and k (inclusive), where k is an input, write a function that shuffles a deck of cards represented as an array using only swaps.

It should run in O(N) time.

Hint: Make sure each one of the 52! permutations of the deck is equally likely.

`;

console.log(problem);

function perfectRandGenerator(k){
    // Generates random numbers between 1 and k. 
    return Math.floor(Math.random() * k) 
}

function shuffler(){
    // Given a deck, choose two random cards and shuffle. 
    const emptyArr = new Array(52).fill(0);
    const deck = emptyArr.map((a,i) => i+1);
    console.log(deck);

    // Lets shuffle 52 times.
    emptyArr.forEach((v,i)=>{
        const a = perfectRandGenerator(52);
        const b = perfectRandGenerator(52);
        // Shuffle. 
        const temp = deck[a]
        deck[a] = deck[b]; 
        deck[b] = temp; 
    })

    console.log(deck)

}

console.log(perfectRandGenerator(52))
shuffler()