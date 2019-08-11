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


function matrixToGraph(){
    // Easier to operate on dict so converts incoming adjacency matrix to dict. 
    // Future TODO
}

/*
We want to make sure that no two adjacent vertices share the same color using 3 colors. 
*/

function canVertexBeUniquelyColored(graph, k){
    // Basically ...  We want to Take a Node, and check how many adjacent nodes are there. If number of adjacent nodes + 1 > k its impossible. 
    const keys = Object.keys(graph);
    for(let i = 0; i< keys.length; i++){
        const key = keys[i]
        const nodes = graph[key]
        if(nodes.length > k){
            return false
        }
    }
    

    return true
}

console.log(canVertexBeUniquelyColored(undirected_graph, 1));
