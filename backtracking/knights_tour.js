/* 

What is the fundamental choice we are making? -> Deciding where to put the knight next out of 8 max possible places. 

What are the constraints? 
- Cannot be out of bounds
- The cell must not have been toured before. 

When to return with first successful solution?
- If the number of placements equals number of available cells, we return.

*/


const moveOptions = [
    [2,-1],
    [2,1],
    [-2,-1],
    [-2,1],
    [1,2],
    [1,-2],
    [-1,2],
    [-1,-2]
]

function checkIfCoordsInArray(placements, coords){
    for(let i=0; i < placements.length; i++){
        const c = placements[i];

        if(c[0] === coords[0] && c[1] === coords[1]){
            return true
        }
    }
    return false
}

const board_size = 4
const numberOfSpaces = board_size * board_size
let numSols = 0
function knightTour(placements, x_cur,y_cur){
    /*
    Step 1: Get all move options. 
    */

    if(placements.length === numberOfSpaces){
        console.log("solution done");
        console.log(placements);
        numSols += 1; 
        console.log(`Solution Number ${numSols}`)
        // If we want to explore all solutions, we remove the 
        return placements
        //break;
        //return placements;
    }
    for(let i=0;i<moveOptions.length;i++){
        const nextMove = moveOptions[i];
        let x_next = x_cur + nextMove[0];
        let y_next = y_cur + nextMove[1];
        if(x_next < 0 || x_next >= board_size){
            // console.log("option out of bounds")
            continue; 
        }
        if(y_next < 0 || y_next >= board_size){
            // console.log("option out of bounds")
            continue; 
        }
        // console.log(moveOptions)
        // console.log(nextMove)
        // console.log(x_next, y_next);
        // console.log(x_cur, y_cur);
        const coords = [x_next, y_next];
        // console.log(coords);
        if(checkIfCoordsInArray(placements, coords)){
            // This is a bad option. 
            //console.log("already went to this cell");
            // console.log(placements);
            // console.log(coords)
            continue
        } else {
            // Good Option, recursively call myself.
            const newPlacements = [...placements, coords]
            // console.log(placements)
            // console.log(newPlacements);
            // break
            const completePlacements = knightTour(newPlacements, x_next,y_next); //Return true if placement complete or returns false 
            if(completePlacements) { 
                return ps 
            }
            
        }
    }
    return false 
}

knightTour([[0,0]],0,0) // Start a first positon. 
