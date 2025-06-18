
class Node{
    constructor(data,nextNode){
        this.data = data;
        this.nextNode = nextNode;
    }
}
    
    class LinkList{
        constructor(){
            this.head = null;
        }
    
        addFirst(data){
            this.head = new Node(data,this.head);
        }
        printList(){
            let x = this.head;
            while (x != null) {
                console.log(x.data)
                x = x.nextNode
            }
        }
        
    }


    let myLink = new LinkList();
    myLink.addFirst("cat")
    myLink.addFirst("dog")
    myLink.addFirst("cowog")

    myLink.printList()
