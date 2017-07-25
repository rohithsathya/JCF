function JSDNode(data){
    this.data = data;
    this.next = null;
    this._self = null;
}

function JSLinkedList(){
    this._head = null;
    this.length = 0;
    this.address = 0;
}
JSLinkedList.prototype.add = function(data){
    var newNode = new JSDNode(data);
    newNode._self = this.address;
    this[this.address] = newNode;
    var currentNode = this._head;
    //if current node is empty which is true for empty list
    if(!currentNode){
        this._head = newNode;
    }else{
        while(currentNode.next){
            currentNode = this[currentNode.next];
        }
        currentNode.next = this.address;
    }
    this.length ++;
    this.address ++;
}

JSLinkedList.prototype.itemAt = function(position){
    var currentNode = this._head;
    var count = 0;
    while(count < position){
        currentNode = this[currentNode.next];
        count ++;
    }
    return currentNode;
}

JSLinkedList.prototype.removeAt = function(position){
    var currentNode = this._head;
    var previousNode = null;
    var count = 0;
    if(position < 0 || position > this.length - 1){
        console.warn("Invalid position : " +position);
        return;
    }
    while(count<position){
        previousNode = currentNode;
        currentNode = this[currentNode.next];
        count ++;
    }
    if(previousNode){
        delete this[previousNode.next];
        previousNode.next = currentNode.next;
    }else{
        //happens only for the head node i.e. pos = 0;
        delete this[this._head._self];
        this._head = this[this._head.next];

    }
    this.length --;

}