const problem =`Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, 
return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
`
/**
 * Naive solution just uses startswith
 */
function autocompleteNaive(string){
    const set = ["dog", "deer", "deal"]
    return set.filter(str => str.startsWith(string))
}

/**
 * Non Naive solution uses pre-processed data structure. 
 * We need it to be o(n) look up. so hashmap
 */
const set = ["dog", "deer", "deal"]
const processed = {} // Hash Map
set.forEach(item => {
    for( let i = 0; i < item.length; i++ ){
        const p = item.slice(0, i+1);
        if(processed[p]){
            processed[p] = [...processed[p],item]
        } else {
            processed[p] = [item]
        }
    }
})
// console.log(processed)

function autocomplete(string){
    return processed[string]
}

// console.log(autocomplete("de"))

function Node(data, endNode){
    this.data = data 
    this.endNode = endNode
}


/**
 * TRIE data structure. 
 * Root -> a, b, c, d ...
 * { a : {}
 */
function Trie(){
    // This is my trie data structure. 
    this.data = {} // Save all the nodes here. 
    this.endNode = false // Is this end node.
    
    /**
     * To add a word, we split character by character until we reach the end.
     */
    this.add = (word) => {
        let currentNode = this.data;
        word.split("").forEach( (chr, index) => {
            if(currentNode[chr]){
                // If it exist don't create a new one but need to reset the currentNode.  
                currentNode = currentNode[chr]
                // If current Node is the last one, than we want to set endNode = True. 
                if(index == word.length -1){
                    currentNode.endNode = true
                }
            } else {
                console.log(chr, "doesn't exist" , currentNode[chr])
                const newNode = new Node(chr, index == word.length-1 )
                currentNode[chr] = newNode
                currentNode = newNode
            }
        })
    }

    this.search = (searchTerm) => {
        // Given search Term, we keep going through the Trie structure, and finding all words that end from the strucutre
        // Technique is to recursively go down and 
        /**
         * 
         */
        const words = []
        function getChild(node, str){
            if(!node){
                return
            }
            if(node.endNode){
                str = str + node.data
                words.push(str + node.data)       
            }
        } 

    }
}

const t = new Trie()
t.add("deer")
t.add("deera")
t.add("dog")
t.add("Apple")

console.log(t)