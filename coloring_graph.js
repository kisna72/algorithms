const problem =  `
    Given an undirected graph represented as an adjacency matrix and an integer k, 
    write a function to determine whether each vertex in the graph can be colored 
    such that no two adjacent vertices share the same color using at most k colors.
`;
const classification="medium";

const undirected_graph = {
    1:[2,3],
    2:[3],
    3:[4,1]
}
//test this with k. 
const tricky_graph = {
    1:[2,3,5],
    2:[1,4],
    3:[1,4],
    4:[2,3,5],
    5:[1,3,4]
}


function matrixToGraph(){
    // Easier to operate on dict so converts incoming adjacency matrix to dict. 
    // Future TODO
}

/*
We want to make sure that no two adjacent vertices share the same color using 3 colors. 
*/

function canVertexBeUniquelyColored(graph, k){
    // First Stab ...  We want to Take a Node, and check how many adjacent nodes are there. If number of adjacent nodes + 1 > k its impossible. 
    const keys = Object.keys(graph);
    for(let i = 0; i< keys.length; i++){
        const key = keys[i]
        const nodes = graph[key]
        if(nodes.length > k){
            return false
        }
    }
    
    // Second Stab => Use Backtracking to determine if possible. . 
    // Exit out of those that don't match the pattern. 
    /*

    */


    return true
}

console.log(canVertexBeUniquelyColored(tricky_graph, 3));
