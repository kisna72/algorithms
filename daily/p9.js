const problem = `
Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?`;

const e1 = [2,4,6,2,5]
e2 = [5,1,1,5]

// Largest sum of non-adjacent numbers .... Hm.... 

/**
 * Naive solution:
 * Take first index. ignore adjacent indexs.
 *  
 */
allAdjacentSums = []
function nonAdjacentSum(inlist, sumSoFar){
    // If [] is passed in, return sumSoFar
    if(inlist.length == 0 ){
        return sumSoFar
    }
    // If [1] is passed in return sumSoFar + 1
    if(inlist.length == 1){
        return sumSoFar + inlist[0]
    }
    // if [2,3] is passed in, we want to run through each combo, which is 2 and 3, and return max
    const sums = []
    for(let i = 0; i< inlist.length; i++){
        const copy = new Array(...inlist)
        copy.splice(Math.max(0, i-1), Math.min(i+2,3) ) // Starting at 0, delete 2 
        const newSum = nonAdjacentSum(copy, sumSoFar + inlist[i] )
        sums.push(newSum)
    }
    return Math.max(...sums)
}

const sums = nonAdjacentSum(e1, 0)
console.log(sums)


/**
 * Optimized Solution 
 * e1 = [2,4,6,2,5]
 * 2
 * 2,4 => max sum = 4. 
 * 2,4,6 => 
 */
// For Each Index, we want largest sum of non adjacent numbers that came before it. 
const cache = new Array(e1.length)
function largestNonAdjacent(arr){
    if(arr.length <= 2){
        return Math.max(arr[0], arr[1])
    }
    cache[0] = Math.max(0,arr[0])
    cache[1] = Math.max(cache[0], arr[1])
    
    e1.forEach( (item,index) => {
        if(index < 2){
            return 
        }
        cache[index] = Math.max( item + cache[index-2] , cache[index-1]  )
    })
    console.log(cache)
}

largestNonAdjacent(e1)