function LLNode(data){
    this.data = data;
    this.next = null;
    this.prev = null;
    this._self = null;
}

function JSLinkedList(){
    this._head = null;
    this._tail = null;
    this.length = 0;
    this.address = 0;
}

JSLinkedList.prototype._addAt = function(data,pos,after){
    var newNode = new LLNode(data);
    newNode._self = this.address;
    var currentNode = this._itemAt(pos);
    if(currentNode){
        var prevNode = this[currentNode.prev];
        this[currentNode._self].prev = newNode._self;
        newNode.next = currentNode._self;
        if(prevNode){
            newNode.prev = prevNode._self;
            this[prevNode._self].next = newNode._self;
        }
        this._assignHeadAndTail(newNode);
    }
}
JSLinkedList.prototype._itemAt = function(position){
    if(!this._validatePosition(position)){
        return null;
    }

    var currentNode = this._head;
    var count = 0;
    while(count < position){
        currentNode = this[currentNode.next];
        count++;
    }
    return currentNode;
}
JSLinkedList.prototype._validatePosition = function(position){
    var pos = parseInt(position);
    if(pos>=0 && pos<this.length){
        return true;
    }else{
        console.warn("Invalid position, position should be between 0 and " + (this.length-1));
        return false;
    }
}
JSLinkedList.prototype._assignHeadAndTail =function(node){
    if(node.next == null){
        this._tail =  node;
    }
    if(node.prev == null){
        this._head = node;
    }
    this[this.address] = node;
    this.address++;
    this.length++;
}
JSLinkedList.prototype.addAt = function(data,pos){
    if(pos == 0){
        this.addAtStart(data);
    }else if(pos == this.length){
        this.addAtEnd(data);
    }else{
        this._addAt(data,pos,false);
    }
}

JSLinkedList.prototype.addAtStart = function(data){
    var newNode = new LLNode(data);
    newNode._self = this.address;
    if(this._head){
        newNode.next = this._head._self;
        this[this._head._self].prev = newNode._self;
    }
    this._assignHeadAndTail(newNode);
}
JSLinkedList.prototype.addAtEnd = function(data){
    var newNode = new LLNode(data);
    newNode._self = this.address;
    if(this._tail){
        newNode.prev = this.address;
        if(this._tail){
            newNode.prev = this._tail._self;
            this[this._tail._self].next = newNode._self;
        }
        this._assignHeadAndTail(newNode);
    }
}
JSLinkedList.prototype.itemAt = function(position){
    var node  =this._itemAt(position);
    if(node){
        return node.data;
    }else{
        return null;
    }
}
JSLinkedList.prototype.getHead = function(){
    var node = this._head;
    if(node){
        return node.data;
    }else{
        return null;
    }
}
JSLinkedList.prototype.getTail = function(){
    var node = this._tail;
    if(node){
        return node.data;
    }else{
        return null;
    }
}
JSLinkedList.prototype.removeAt = function(position){
    var currentNode = this._itemAt(position);
    var prevNode = this[currentNode.prev];
    var nextNode = this[currentNode.next];
    delete this[currentNode._self];
    this.length--;

    if(prevNode){
        this[prevNode._self].next = currentNode.next;
        if(prevNode.next == null){
            this._tail = prevNode;
        }
        if(prevNode.prev == null){
            this._head = prevNode;
        }
    }
    if(nextNode){
        this[nextNode._self].prev = currentNode.prev;
        if(nextNode.next == null){
            this._tail = nextNode;
        }
        if(nextNode.prev == null){
            this._head = nextNode;
        }
    }
}
JSLinkedList.prototype.removeHead = function(){
    this.removeAt(0);
}
JSLinkedList.prototype.removeTail = function(){
    this.removeAt(this.length-1);
}

//applicable only for nodejs/npm
if (typeof module != 'undefined' && module != null) {
     module.exports = JSLinkedList;
}else{
    //for client side export
    if (typeof JCF === 'undefined' || JCF == null) {
        JCF = {}
    }
    JCF.LinkedList = JSLinkedList;
}