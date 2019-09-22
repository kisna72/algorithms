const problem = `
Given an array of integers, find the first missing positive integer in linear time and constant space. 
In other words, find the lowest positive integer that does not exist in the array. 
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.

`

const arr = [3,4,-1,1] 
const arr1 = [1,2,0]

function lowestPosInt(arr){
    /**
     * Naive Algorithm
     * Add all +ve numbers to a set. and figure out max value. No Sorting.
     * 
     */
    let max = -Infinity;
    const set = new Set();
    for(let i = 0; i< arr.length; i++){
        const cur = arr[i];
        set.add(cur);
        if(cur > max){
            max = cur
        }
    }
    // That was O(N), Now we will do a loop over 0- max and return first item not available in the set.
    // This is O(N) worst case. 
    // So total will be 2*O(N) 
    console.log("Max is ", max)
    for(let i = 1; i<=max+1; i++){ // go from 1 to max+1 and see if it exists in set. 
        console.log("Checking for ", i)
        if(!set.has(i)){
            console.log("Found index thats not there. ");
            return i
        }
    }
    /**
     * Question has a hint that says you can modify the array in place ... 
     * Instead of using set, we can basically iterate over the array, for each item, swap it with appropriate 
     * /

}

console.log(lowestPosInt(arr))
console.log(lowestPosInt(arr1))