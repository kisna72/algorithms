// Use Framework. 
/*
What is the fundamental choice we are making ?  -> Where to place queen next.

What are the constraints?
if queen has x coordinate of a, no other locations with (a, any y) are viable. 
if queen has y coordinate of b, no other locations with (any x, b) are viable. 

Example: Queen is place in (2,1)
Any coordinates with (2, any y) are out.
Any coordinate with (any x, 1) are out. 

We need to check this condition for each queen that has already been placed in the board. 

What is the base condition ? 
Base Condition is if lenght of queen positions is equal to N. 

*/

const board_size = 4; //Square board. 
const N = 4
function queenPosition(currentPlacements, board_size, N){
    // Generate Choices -> In our board, we take board_size, and generate array of all x and ys. 
    const allCoords = []; // Think if this as rows
    const disallowed_xs = currentPlacements.map(item => item[0])
    const disallowed_ys = currentPlacements.map(item => item[1])

    const disallowed_diagonals = [];
    currentPlacements.forEach(item => {
        const numberOfRightDiagonals = board_size-item[0];
        for(let i=item[0];i<numberOfRightDiagonals;i++){
            const daig_coord = [item[0]+i, item[1]+i]
            disallowed_diagonals.push(daig_coord);
        }
        const numberOfLeftDiagonals = item[1];
        for(let i=item[1];i>0;i--){
            const diag_coord = [item[0]+i,item[1]-i]
            disallowed_diagonals.push(diag_coord)
        }
    })
    console.log("----")
    console.log(currentPlacements);
    console.log(disallowed_diagonals);
    //console.log(disallowed_xs);
    //console.log(disallowed_ys);
    for(let x = 0; x < board_size; x++){
        for(let y = 0; y < board_size; y++){
            //console.log("here")
            if(disallowed_xs.includes(x)){
                continue
            }
            if(disallowed_ys.includes(y)){
                continue
            }
            const allowed_coord = [x,y]
            
            // Check for Diagonals.
            let fallsInDiagonal = false
            for(let i=0; i<disallowed_diagonals.length; i++){
                diag_cell = disallowed_diagonals[i];
                if(diag_cell[0] === x && diag_cell[1] === y){
                    console.log("This is a diagonal coordinate")
                    fallsInDiagonal = true
                    break
                }
            }
            if(!fallsInDiagonal){
                allCoords.push(allowed_coord)
            }
        }
    }
    console.log(allCoords)

    // Check for base conditions 
    if(currentPlacements.length === N){
        console.log("Able to place all queens. ")
        console.log(currentPlacements)
        return true
    }
    if(allCoords.length === 0){
        // Means, we are not able to place all N queens. 
        console.log("Not able to palce all queens. ")
        return false // so that we don't run anymore iterations - although not really necessary. 
    }

    // iterate over all availble choices. 
    

    for(let i = 0; i<allCoords.length; i++){
        const cur_coord = allCoords[i];
        const newCurrentPlacement = [...currentPlacements, cur_coord];
        const moving = queenPosition(newCurrentPlacement, board_size, N)
        if(!moving){
            return false
        }
    }

}

queenPosition([],board_size , N)