const problem = `Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?`


/**
 * If we use division, this problem becomes a simple one. 
 */
const ints =[1,2,3,4,5]

function productWithoutSelf(ints){
    const product = ints.reduce((prev,cur)=>cur*prev , 1)
    return ints.map(int => product / int)
}

const a = productWithoutSelf(ints)
console.log(a)

/**
 * What if you can't use division ? 
 * Then you have to multiply each numbers.. Doing it every time is not ideal. 
 * In the Naive solution below, we are doing the same set of multiplication several time.
 * eg, 1*2 is done for every 3,4 and 5. 
 * eg, 2*3 is done for 1, 4 and 5 
 */

// Naive Solution 
const b = ints.map(item => {
    let product = 1;
    const ints_without_self = ints.filter(num => num !== item)
    return ints_without_self.reduce( (prev,cur) => prev*cur , 1)
})

console.log(b)

/**
 * A better approach might be to create two arrays. At each index, array of itesm on the left. + right
 */
//const ints =[1,2,3,4,5]

const left_products = [1]
for(let i=0; i<ints.length-1;i++){
    if(i==0){
        left_products.push(1)
    } else {
        const index = left_products.length -1 
        left_products.push(ints[i]* left_products[index] )
    }
}
console.log(left_products)

console.log("---")
const right_products = [1]
for(let i = ints.length-1; i>=0; i--){
    const curItem = ints[i]
    if(i==ints.length-1){
        // console.log("last item", curItem)
    } else {
        right_products.unshift(ints[i+1]* right_products[0])
    }
}
console.log(right_products)

// Now that we have left and right products, we can go over the array 
const c = ints.map( (int,index)=>{
    return left_products[index] * right_products[index]
})
console.log(c)

