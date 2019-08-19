

const tricky_graph = {
    '1':['2','3','5'],
    '2':['1','4'],
    '3':['1','4'],
    '4':['2','3','5'],
    '5':['1','3','4']
}


// Fundamentals. 
// What is the choice? -> We are choosing a node, and then choosing a color -> so two choices
const nodes = ['1','2','3','4','5']
const colors = ['red','green','blue']

function adjacentNodesWithSameColors(assignment){
    //console.log(assignment)
    const assigned_nodes = Object.keys(assignment); 
    //console.log("Assigned Nodes are", assigned_nodes)
    for (let i=0; i<assigned_nodes.length;i++){
        const node = assigned_nodes[i];
        const nodes_color = assignment[node]; // We will check against this color. 
        // console.log(node)
        const nodes_that_cannot_have_same_color = tricky_graph[node]
        // console.log(nodes_that_cannot_have_same_color)
        for (let i=0; i<nodes_that_cannot_have_same_color.length; i++){
            const node_to_check = nodes_that_cannot_have_same_color[i]
            if(assignment[node_to_check]){
                if(assignment[node_to_check] === nodes_color){
                    //console.log("adjacent nodes with same colors. Cannot COntinue ")
                    return true
                }
            }
        }
    }
    console.log("Ok to continue")
    console.log(assignment)
    return false
}

function selectNextNode(selected){
    // What are choices? But if color has already been used, we cannot use it again.
    const node_selected = Object.keys(selected);
    const node_available = nodes.filter(item => !node_selected.includes(item))

    // Base Condition.
    if(node_selected.length == nodes.length){
        console.log("We are done, since we'd never get his far if checks didn't pass.")
        console.log(selected)
        return selected
    }


    for (let i = 0; i< node_available.length; i++){
        for(let j=0; j<colors.length; j++){
            const new_assignment = {...selected}
            //console.log("Node available [ i ] ", node_available[i]);
            new_assignment[node_available[i]] = colors[j]

            if(!adjacentNodesWithSameColors(new_assignment)){
                console.log("Calling next")
                const returnedVal = selectNextNode(new_assignment);
                if(returnedVal){
                    return returnedVal
                }
            } else {
                continue
            }
        }
    }
}
// [ Node, color ] format. 
selectNextNode({'1':'red'})