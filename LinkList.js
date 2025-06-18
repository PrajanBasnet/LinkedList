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
             console.log(x.value)
                x = x.next;
            }
        
     }
     removeData(data){
        let todlt = this.head;
        let newList = this.head.next;

        while(newList !== null){
            // console.log("this is old list value ", todlt.value)
            console.log("this is NEWWW list value ", newList.value)

            if(newList.value === data){
                todlt.next = newList.next;
            }

            todlt = newList;
            newList = newList.next;
        }

     }
}

let newList = new LinkList();

newList.append("iphone")
newList.append("fan")
newList.append("table")
newList.append("dog")
newList.removeData("fan");

newList.printData()
