const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 1],
    [1, 1, 1, 1]
]
console.log(maze[3][3])

function isCellOpen(x,y){
    // uses maze to check if [x,y] is o. 
    console.log("checking values at position",x,y)
    if(maze[y][x] === 1){
        return true
    }
    return false 
}

function isOutOfBounds(x,y){
    // use maze to check if positions x and y are out of bounds. 
    if(x+1 > maze[0].length){
        return true
    }
    if(y+1 > maze.length){
        return true
    }
    return false 
}

function solveRatMaze(current_path, cur_x, cur_y){
    // What is the choice we are making? -> We are making a choice between going sideways or downwards. 
    const moveOptions = [
        [0,1],
        [1,0],
    ]
   
    // Base Condition? -> If cur_x and cur_y are at the end of the maze.
    console.log("We are at position ", cur_x, cur_y)
    
    // if both true, we return! Goal has been met. 
    if(cur_x === (maze[0].length -1) && cur_y === (maze.length-1) ){
        console.log("Maze was successfully traversed.")
        console.log(current_path)
        return current_path
    }

    // Exploration if choices within the stack frame. 
    for(let i=0; i<moveOptions.length; i++){
        //When do we know moves are not possible ? -> IF for each move, cells are blocked.
        const nextMove = moveOptions[i];
        const x_next = cur_x + nextMove[0];
        const y_next = cur_y + nextMove[1];

        // What are the constraints?
        // 1. The maze shouldn't be out of bounds. 

        if(isOutOfBounds(x_next, y_next)){
            console.log(x_next, y_next, "Are out of bound values, so ignore this path")
            return []  
        }

        // There should be at least 1 valid path. 
        if(isCellOpen(x_next, y_next)){
            console.log("Found a Viable Path");
            console.log(x_next, y_next)
            const new_current_path = [...current_path ,  [x_next, y_next]]
            // console.log(cur_x, cur_y);
            const solutionPath = solveRatMaze(new_current_path, x_next, y_next)
            // if(solutionPath){
            //     return solutionPath
            // }
            
        } else {
            console.log(" THis path is blocked, so we will continue")
            continue 
        }
       
    }
    // We make this choice every sing time. 
}

const solution = solveRatMaze([ [0,0],], 0,0);
console.log(solution )
