const problem = `
An XOR linked list is a more memory efficient doubly linked list. 
Instead of each node holding next and prev fields, it holds a field named both, 
which is an XOR of the next node and the previous node. 
Implement an XOR linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.

If using a language that has no pointers (such as Python), 
you can assume you have access to get_pointer and dereference_pointer functions 
that converts between nodes and memory addresses.
`

/**
 * Lets implement a normal Linked List first in js. Not possible to do XOR in js.
 * A linked list has Root Node and 
 */

function Node(val, next){
    this.val = val
    this.next = next
}

function LinkedList(){
    this.head = null
    this.append = function(data){
        if(this.head == null){
            this.head = new Node(data)
        } else {
            current = this.head 
            while(current.next){
                current  = current.next 
            }
            current.next = new Node(data)
        }
    }
    this.prepend = function(data){
        if(this.head == null){
            this.head = new Node(data)
        } else {
            node = new Node(data)
            node.next = this.head 
            this.head = node 
        }

    }
    this.removeNodeWithVal = (data) => {
        if(this.head.val == data){
            this.head  = this.head.next
        }
        // if current is not head, then
        prev = this.head
        current = this.head.next
        while(current.val !== data){
            if(current.next){
                current = current.next
            } else {
                // checked last node. Not Found.
                current = null 
                break
            }
        }

        if(current){
            // get previous + next.
            prev.next = current.next 
        }
    }
}


const ll = new LinkedList() 
ll.append("test")
ll.append("foo")
ll.prepend("first")
ll.removeNodeWithVal("foo")

console.log(ll)