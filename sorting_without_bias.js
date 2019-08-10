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

    /*
        Technique 1: Doesn't create any bias 
        Loop Invariant here: Each array[0:i] for each index is perfectly random. 
    */

    for (let i=0; i<n;i++){
        const j = i + perfectRandGenerator(n-i); // Any number from index to the n
        const temp = deck[i]
        deck[i] = deck[j];
        deck[j] = temp; 
    }

    /* 
        Technique 2 -> Creates Bias 
        In case of 3 elements in an array, we have 6 different ways of representing the combination.
        But the aglorithm runs 
    */

    // for (let i=0; i<n;i++){
    //     const j = perfectRandGenerator(n);
    //     const temp = deck[i]
    //     deck[i] = deck[j];
    //     deck[j] = temp; 
    // }

    /*
        Technique 3 -> Creates Bias. 0 has highest probability of being at 0. 1 has highest probability of being at 1. 
        No bias if number of times shuffled is much higher than n itself. 
        The Bias comes from the fact that there is higher chance of a card not being picked than being picked. 
        If n= 3, and we are randomly picking 2 numbers between 0-2 and 0-2. 
        Loop Invariant says -> at each index, we get two numbers that are equally probable
        We swap cards at those indices. 
    */
    
    // for(let i = 0; i < n; i++){
    //     const a = perfectRandGenerator(n);
    //     const b = perfectRandGenerator(n); 
    //     // console.log(a,b)
    //     const temp = deck[a];
    //     deck[a] = deck[b];
    //     deck[b] = temp;
    // }
    
    /*
        Technique 4 -> Very similar to technique 1. 
        pick a random number from the deck, and add it to the shuffled array. 
        Keep doing it until there is no more left in the deck. 

    */

    // const shuffled_deck = [] 
    // while(deck.length > 0){
    //     const a = perfectRandGenerator(deck.length);
    //     shuffled_deck.push(deck[a]);
    //     deck.splice(a,1);
    // }
    
    // return shuffled_deck
    

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
        // console.log(deck)
        deck.forEach((item,index)=> {
            // if [3,2,1], that means, deck[0][3-1] gets a +1,  deck[1][2-1] gets a +1, deck[2][1-1] gets a +1
            probs[index][item-1] += 1 
        })
        
    }
    //console.log(probs)
    let windex = 1 //which index?? 
    const sum = probs[windex].reduce((a,b)=>a+b,0)
   // console.log(probs[windex])
    //.log(sum)
    const probabilities = probs[windex].map((v,i) => {
        console.log(v)
        return v/sum
    })
    console.log(probabilities)
    //console.log( probs[windex][0] /(sum) , probs[windex][1] /(sum) , probs[windex][2] /(sum) ) 
}


//console.log(perfectRandGenerator(3))
//shuffler(3)
verifyEqualProbability(10)