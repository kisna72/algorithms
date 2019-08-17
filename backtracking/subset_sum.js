const problem = `Subset sum problem is to find subset of elements that are selected from a given set whose sum adds up to a given number K. 
We are considering the set contains non-negative values. It is assumed that the input set is unique (no duplicates are presented).
`

const practice_set = [1,2,3,4,5,6,7,8,9,10]
const sum = 10
// Choosing 10 since lots of combo will form sum of 10

// Framework.

// What choice are we making? -> We are  fundamentally choosing next number from list of available items. 

// What are the Base Cases? -> Sum is 10. 
// What are constraints? -> Sum shouldn't exceed 10

function getSetToSumK(current_set, K){
    // Get Choices.
    const choices = practice_set.filter(item => {
        if(current_set.includes(item)){
            return false 
        }
        return true 
    })

    // Iterate over each choice. 
    for(let i = 0; i< choices.length; i++){
        const current_choice = choices[i];

        // Base condition
        const arr_with_current_choice = [...current_set, current_choice]
        const current_sum = arr_with_current_choice.reduce( (acc,cur)=>acc+cur, 0 )
        if(current_sum == K){
            console.log("Found a answer")
            console.log(arr_with_current_choice)
            return arr_with_current_choice
        }
        // Check for constraint
        if(current_sum > K ){
            return false
        }

        // Otherwise keep iterating
        const final_arr = getSetToSumK(arr_with_current_choice, K)
        if(final_arr){
            return true
        }
    }
}

getSetToSumK([],sum)