class Node{
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}

class LinkList{
     constructor(){
        this.head = null;
     }

     append(data){
        let newNode = new Node(data,this.head);
        this.head = newNode
     }

     printData(){
         let x = this.head;
         while (x !== null) {
             console.log("->" , x.value)
                x = x.next;
            }
        
     }
     insertAfter(value,toInsert){
        let x = this.head;

        while(x !== null){
            if(value === x.value){
                let t = new Node(toInsert,x.next);
                x.next = t;
            }
            x = x.next;
        }
        
     }
     
     removeData(data){
        let todlt = this.head;
        let newList = this.head.next;

        while(newList !== null){
            if(newList.value === data){
                todlt.next = newList.next;
            }
            todlt = newList;
            newList = newList.next;
        }

     }

     size(){
        let x = this.head;
        let current = this.head.next;
        let o = 0;
        while(current !== null){
            
            x = x.next;
            current = current.next
            o++;
        }
        console.log("Last Node: ",x.value)
        console.log("total size of the Linked List: ", o)
     }

     firstNode(){
        console.log("This is the First Node", this.head.value)
     }

     toString(){
        let o = this.head;
        let x  = "";
        // let t = []
        while(o !== null ){
            // t.push(o.value)
            x += `(${o.value}) ->`;
            o = o.next;
            

        }
        console.log("->",x)
     }
     at(value){
        let x = this.head;
        let o = 0;
       while(x !== null){
           o++;
           if(x.value === value){
               console.log(o)
               return;
        }
        x = x.next;
    }
     }

     pop(){
        let current = this.head;
        let newCurrent = this.head.next;

        while(newCurrent !== null){
            console.log("Test----", current.value)
            newCurrent = newCurrent.next;
            current = current.next;
            this.head = current.next;
            }
        
     }
}

let newList = new LinkList();

newList.append("iphone")
newList.append("fan")
newList.append("table")
newList.append("dog")
// newList.removeData("fan");
newList.insertAfter("fan","Prajwal")
newList.size()
newList.firstNode()
newList.printData()
newList.pop()
newList.at("table");

newList.printData()
