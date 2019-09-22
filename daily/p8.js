const problem = `
This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
 `;

/**
 * All Roots are unival tree. 
 * We recreate a tree and recursively iterate over it, and count the number of unival trees below it
 */

// Constructor used to create nodes for binary tree.   
function Node(data,left,right){
    this.data = data 
    this.left = left 
    this.right = right 
}

// Example tree
const tree = new Node(
    0,
    new Node(1),
    new Node(
        0,
        new Node(
            1,
            new Node(1),
            new Node(1)
        ),
        new Node(0)
        )
)

/**
 * Naive Solution to the problem. 
 * for Each node, check to see if all the nodes below it are the same. If reached the end while meeting conditions, return 1. 
 * 
 * @param {Node} tree 
 * @param {String | Integer } val 
 */

function univalTreeCountNaive(tree, data){
    // base case => leaf node 
    if(!tree.left && ! tree.right){
        return 1
    }

    // If left and right exist, lets go ahead and run the function recursively for children.
    // Whatevern we return should be returned with these two values added. 
    const childUnivalsLeft = univalTreeCount(tree.left, tree.left.data)
    const childUnivalsRight = univalTreeCount(tree.right, tree.right.data)

    const childrenUnivals = childUnivalsLeft + childUnivalsRight

    // base case => left or right is not equal to the data
    if(tree.left.data !== data || tree.right.data !== data ){
        return 0 + childUnivalsLeft + childUnivalsRight
    } else {
        const univalsLeft = univalTreeCount(tree.left, data)
        const univalsRight = univalTreeCount(tree.right, data)
        if(univalsLeft * univalsRight == 0){
            return 0 + childrenUnivals
        } else {
            return 1 +  childrenUnivals
        }
    }

}

function leafNodes(tree, parent){
    //Return a list of leaf nodes. 
    if(!tree.left && !tree.right){
        // We found a leaf node. 
        // Work up to find number of
        return [tree]
    }
    const leafs = []
    if(tree.left){
        left_leafs = leafNodes(tree.left, tree)
        left_leafs.forEach(node => leafs.push(node))
    }
    if(tree.right){
        right_leafs = leafNodes(tree.right, tree)
        right_leafs.forEach(node => leafs.push(node))
    }
    return leafs
}

console.log(leafNodes(tree))

function univalTreeCount(node){
       
    return isUnival, Count
}

// function univalTreeCount(tree, parent){
//     // Get all Leaf Nodes for this tree.
//     let leftLeaf = null
//     let rightLeaf = null
//     while(tree.left && tree.right ){
//         leftLeaf = univalTreeCount(tree.left, tree)
//         rightLeaf = univalTreeCount(tree.right, tree)
//     }


//     let univalTrees = 0 
//     if(!tree.left && ! tree.right){
//         // Start going upwards now. 
        
//     }

// }

// node0 = new Node(0)

// console.log(univalTreeCount(tree,null))


