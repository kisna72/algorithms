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

function randomUndirectedGraphGenerator(){
    // FUture   
}

/*
We want to make sure that no two adjacent vertices share the same color using 3 colors. 
*/

function canVertexBeUniquelyColored(n){
    return true
}