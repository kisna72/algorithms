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

function shuffler(n){
    // Given a deck, choose two random cards and shuffle. 
    if(!n){
        n = 52
    }
    const emptyArr = new Array(n).fill(0);
    const deck = emptyArr.map((a,i) => i+1);
    // console.log(deck);

    // Lets shuffle 52 times.
    emptyArr.forEach((v,i)=>{
        const a = perfectRandGenerator(n);
        const b = perfectRandGenerator(n);
        // Shuffle. 
        const temp = deck[a]
        deck[a] = deck[b]; 
        deck[b] = temp; 
    })
    //console.log(deck)
    return deck

}

function verifyEqualProbability(n){
    // Run shuffler 1 million times.
    console.log("verifying ")
    let probs = new Array(n).fill([])
    console.log(probs)
    for(let i=0;i<n;i++){
        probs[i] =  new Array(n).fill(0)
    }
    //console.log(probs)
    //const probs = [[0,0,0],[0,0,0],[0,0,0]]
    for (let i=0; i < 100000; i++){
        // Each time we do the shuffle, and add 
        //console.log(i);
        deck = shuffler(n);
        //console.log(deck)
        deck.forEach((item,index)=> {
            // if [3,2,1], that means, deck[0][3-1] gets a +1,  deck[1][2-1] gets a +1, deck[2][1-1] gets a +1
            probs[index][item-1] += 1 
        })
        
    }
    //console.log(probs)
    let windex = 0 //which index?? 
    const sum = probs[windex].reduce((a,b)=>a+b,0)
   // console.log(probs[windex])
    //.log(sum)
    const probabilities = probs[windex].map((v,i) => v/sum )
    console.log(probabilities)
    //console.log( probs[windex][0] /(sum) , probs[windex][1] /(sum) , probs[windex][2] /(sum) ) 
}


//console.log(perfectRandGenerator(3))
//shuffler(3)
verifyEqualProbability(52)