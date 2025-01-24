const node1 = {value: 10, next:null}
const node2 = {value: 10,next:null}
const node3 = {value: 10, next:null}

node1.next=node2;
node2.next=node3;

let node=node1;
while(node!==null){
    console.log(node.value)
    node=node.next}