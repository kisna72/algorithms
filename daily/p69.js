const problem = `
Given a list of integers, return the largest product that can be made by multiplying any three integers.

For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.

You can assume the list has at least three integers.

`

const inList = [-10,-10,5,2]

function largestProduct(arr){
    /**
     * Naive Method is to just iterate over skipping previously iterated item. 
     * This method - you go over each combo of three numbers and compare against previous max. 
     * This takes O(N)*O(N-1)*O(N-2) time. which is like O(N^3) time.  Too expensive. 
     */
    let max_product = -Infinity;
    for(let i=0; i<arr.length; i++){
        // Now that we have already selected the item at index i, we need to remove it next time.
        const first = arr[i];
        const arrl2 = arr.filter((item,index) => index !== i )
        for(let j=0; j<arrl2.length; j++){
            const second = arrl2[j];
            const arrl3 = arrl2.filter((item,index) => index !== j)
            for(let k=0; k<arrl3.length; k++){
                const third = arrl3[k]
                const product = first * second * third 
                console.log(first, second, third , " Product ", product)
                if(product > max_product){
                    max_product = product
                }
            }
        }
    }

    console.log("Result from First strategy is ", max_product);

    max_product = -Infinity;
    /**
     * The above does the same multiplication over and over. There are some strategies to reduce the number of operation. 
     * First -> If the number of items is 4 makes sense to get product of all of them, and the divide group of 1. if 5 item group of 2, and if 6 items group pf 3 ....
     * But at that point these is no gain over doing the naive approach as we did above. 
     * Second -> We can sort the array (which takes O(NLogN) time). And then once the array is sorted, 
     * Find index with first non negative number. 
     * if first index is 0 or 1, then multiply last three. Takes O(1) Time. 
     * If first index is 2 or more, than we know that max is either going to be First two * Last or last three
     * 
     * Total = 2O(1) + O(NLogN) time. so basically O(NLogN) time.
     */

    arr.sort((a,b)=> a - b) // Sort. 
    console.log(arr)
    all_pos = arr[arr.length-1] * arr[arr.length -2 ] * arr[arr.length - 3 ]
    some_neg = arr[0] * arr[1] * arr[arr.length - 1]
    console.log(all_pos, some_neg)
    max_product =  Math.max(all_pos, some_neg)

    /**
     * If we need to solve this in O(N) time, we can essentially iterate over the entire array once. 
     * Keep track of two minimums, and three maxs. 
     * and return Max of products of either two mins * max or three maxs. 
     */
    console.log("---- O(N) Solution ")
    let min1 = Infinity; // The smallest number 
    let min2 = Infinity; // Second Smallest Number
    let max = -Infinity; // Highest Number
    let max2 = -Infinity; 
    let max3 = -Infinity;
    arr.forEach(element => {
        if(element <= min1){
            min2 = min1;
            min1 = element;
        }
        if(element >= max){
            max3 = max2;
            max2 = max
            max = element
        }
    });
    console.log(min1, min2, max, max2, max3)
    max_product = Math.max( min1*min2*max, max*max2*max3)

    return max_product
}

const a = largestProduct(inList)
console.log(a);