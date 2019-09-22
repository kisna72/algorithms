const problem = `
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

`

function canTwoNumbersAddToK(numbers, k){
    console.log("solving")
    /**
     * We are essentially trying to sum each of the two numbers.
     * However we can cut the number of sums in half because we only have to try summing a number with indexes that come
     * after it.
     * Algorithm Below takes O(N^2)/2 time, since if you make a 2d matrix you only have to iterate over half of the matrix. 
     */
    for (let i=0; i<numbers.length; i++ ){
        for(let j=i+1; j<numbers.length; j++){
            if(numbers[i] + numbers[j] === k ){
                console.log("Sum", numbers[i], numbers[j])
                //return true
            } else {
                console.log("Do not Sum ", numbers[i], numbers[j])

            }
        }
    }
    //return false 

    /**
     * Next up, we do a technique where we look at each number, and if that number is seen, we add it to a list.
     * The Idea is -> you iterate through numbers, and add them in set.
     * For Each item you subtract that with k, and check if it is available in the set. 
     * This is more efficient than double iteration above. The time complexity should be N
     */
    console.log("========================")
    const set = new Set();
    for(let i = 0; i<numbers.length; i++){
        const current_number = numbers[i];
        
        if(set.has(k - numbers[i] )){
            console.log("Sum " , k-numbers[i] , numbers[i])
        }
        set.add(numbers[i])
        console.log("c")
    }

    /**
     * Next way we sort the array. Once sorted, we [3,7,8,10,15] Sort + Binary Search. 
     * can start Doing Binary Search on the array.
     * for Each, get the middle item. If k-middle item is greater than current number, we take the left. If more we take right.
     */

    const sorted_numbers = numbers.sort((a, b) => a - b);
    console.log(sorted_numbers);
    console.log("Algo using sorted array")
    for(let i=0; i<sorted_numbers.length; i++){   
        console.log("current index ", i , " value is ", sorted_numbers[i])     
        let current_subset = sorted_numbers; 
        while(current_subset.length > 0){
            console.log("subset's length is ", current_subset.length)
            // As long as the current subset's length is higher, 
            const middle_index = Math.floor(current_subset.length/2);
            const middle = current_subset[middle_index]
            console.log("middle value is", middle)
            if(middle + sorted_numbers[i] === k){
                current_subset = []
                console.log("Problem solved with ", sorted_numbers[i])
                console.log("=============")
                return true
            } else if (middle + sorted_numbers[i] < k ){
                // Means we need to get middle of the right.
                current_subset = current_subset.slice(middle_index+1,current_subset.length);
                console.log(current_subset)
            } else {
                // get middle of left bisect. 
                console.log("summation will be greater than k")
                current_subset = current_subset.slice(0,middle_index);
                console.log(current_subset)
            }
        }
        

    }


};


const numbers = [10,15,3,7,8]
const k = 17
const ans = canTwoNumbersAddToK(numbers,k)
