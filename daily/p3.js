const problem = `
Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
`; 

function Node(val, left, right){
    return {
        val,
        left,
        right 
    }
}

const node = Node('root', Node('left',Node('left.left'), Node('left.right')) , Node('right')  )

function serialize(node){
    const serialized = JSON.stringify(node);
    console.log(serialized)
    return serialized
}


console.log(node);
const s=serialize(node);

function deserialize(jsonString){
    const json = JSON.parse(jsonString);
    console.log("tried to deserialize")
    console.log(json);
    return json 
}

const d = deserialize(s)
//console.log(d);
console.log(d.left.left.val);

