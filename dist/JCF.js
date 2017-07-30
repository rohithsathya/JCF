function jsStack() {
    this._index = -1;
    this.length = 0;

}
jsStack.prototype.push = function (data) {
    if (data) {
        this._index++;
        this.length++;
        this[this._index] = data;
    }


}
jsStack.prototype.pop = function () {
    if (this._index > -1) {
        var objToDelete = this[this._index];
        delete this[this._index];
        this._index--;
        this.length--;
    } else {
        console.warn("nothing to pop")
    }
}


//applicable only for nodejs/npm
if (typeof module != 'undefined' && module != null) {
    module.exports = jsStack;
} else {
    //for client side export
    if (typeof JCF === 'undefined' || JCF == null) {
        JCF = {}
    }
    JCF.Stack = jsStack;
}


//Queue FIFO
function JSQueue(){
    this._index = -1;
    this.length = 0;
}
JSQueue.prototype.add = function(data){
    if(data){
        this._index ++;
        this.length ++;
        this[this._index] = data;
    }
}
JSQueue.prototype.remove = function(){
    if(this._index > -1){
        var objToDelete = this[0];
        delete this[0];
        this._index --;
        this.length --;
        //move one step to left
        for(var i=0;i<this.length;i++){
            this[i] = this[i+1];
        }
        //delete the duplicate last element
        delete this[this.length];
        return objToDelete;
    }else{
        console.warn("Nothing to remove");
    }
}
JSQueue.prototype.peek = function(){
    return this[0];
}

//applicable only for nodejs/npm
if (typeof module != 'undefined' && module != null) {
     module.exports = JSQueue;
}else{
    //for client side export
    if (typeof JCF === 'undefined' || JCF == null) {
        JCF = {}
    }
    JCF.Queue = JSQueue;
}
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
    JCF.LinkdeList = JSLinkedList;
}
function treeNode(data){
    this.value = data;
    this.children = [];
    this.parent = null;
}
treeNode.prototype.addChild =function(node){
    node.parent = this;
    this.children.push(node);
}
treeNode.prototype.getRoot = function(){
    var currentNode = this;
    while(currentNode.parent != null){
        currentNode = currentNode.parent;
    }
    return currentNode;
}
treeNode.prototype.getParent = function(){
    return this.parent;
}
treeNode.prototype.getChildren = function(){
    return this.children;
}
treeNode.prototype.getValue = function(){
    return this.value;
}
treeNode.prototype.delete = function(){
    if(this.parent){
        var index = this.parent.children.indexOf(this);
        this.parent.children.splice(index,1);
    }else{
        this.value = null;
        this.parent = null;
        this.children = null;
    }
}
treeNode.prototype.toJson = function(){
    var root = this.getRoot();
    var rootCopy = {};
    rootCopy.children = [];
    this._addJustChildrenValue(root,rootCopy);
    return rootCopy;
    
}
treeNode.prototype.toString = function(){
    var root = this.getRoot();
    var rootCopy = {};
    rootCopy.value = root.value;
    rootCopy.children = [];
    this._addJustChildrenValue(root,rootCopy);
    return JSON.stringify(rootCopy);
}
treeNode.prototype._addJustChildrenValue = function(node,nodecopy){
    for(var i=0;i<node.children.length;i++){
        var chilNode = {};
        chilNode.value = node.children[i].value;
        chilNode.children =[];
        nodecopy.children.push(chilNode);
        this._addJustChildrenValue(node.children[i],nodecopy.children[i]);
    }
}

//applicable only for nodejs/npm
if (typeof module != 'undefined' && module != null) {
     module.exports = treeNode;
}else{
    //for client side export
    if (typeof JCF === 'undefined' || JCF == null) {
        JCF = {}
    }
    JCF.Tree = treeNode;
}


function JSDNode(data){
    this.value = data;
}

function JSDGraph(){
    this._vertices = [];
    this._adjecencyList = [];
}

JSDGraph.prototype.addVertex = function(node){
    if(node.constructor.name == "JSDNode"){
        if(this._vertices.indexOf(node) < 0){
            this._vertices.push(node);
            this._adjecencyList[this._vertices.length - 1] = [];
        }else{
            console.warn("Duplicate Node");
        }
    }else{
        console.warn("Invalid Node");
    }
}
JSDGraph.prototype.addEdge = function(src,dest){
    var srcIndex = this._vertices.indexOf(src);
    var destIndex = this._vertices.indexOf(dest);
    if(srcIndex >= 0 && destIndex >=0){
        if(this._adjecencyList[srcIndex]){
            if(this._adjecencyList[srcIndex].indexOf(destIndex) <0 ){
                this._adjecencyList[srcIndex].push(destIndex);
            }else{
                console.warn("Duplicate Edge");
            }
        }else{
            this._adjecencyList[srcIndex] = [];
            this._adjecencyList[srcIndex].push(destIndex);
        }
    }else{
        console.warn("Nodes does not exists");
    }
}
JSDGraph.prototype.removeVertex = function(node){
    if(node.constructor.name == "JSDNode"){
        var nodeIndex = this._vertices.indexOf(node);
        if(nodeIndex >=0){
            this._vertices[nodeIndex] = null;
            this._adjecencyList[nodeIndex] = [];
            for(var i=0;i<this._vertices.length;i++){
                for(var j=0;j<this._adjecencyList[i].length;j++){
                    if(this._adjecencyList[i][j] == nodeIndex){
                        this._adjecencyList[i].splice(j,1);
                    }
                }
            }
        }else{
            console.warn("Node does not exists");
        }
    }else{
        console.warn("Invalid Node");
    }
}
JSDGraph.prototype.removeEdge = function(src,dest){
    var srcIndex = this._vertices.indexOf(src);
    var destIndex = this._vertices.indexOf(dest);
    if(srcIndex >=0 && destIndex >=0){

        if(this._adjecencyList[srcIndex]){
            var edgeIndexOfDest = this._adjecencyList[srcIndex].indexOf(destIndex);
            if(edgeIndexOfDest >= 0){
                this._adjecencyList[srcIndex].splice(edgeIndexOfDest,1);
            }else{
                console.warn("There is no edge b/w src and dest");
            }
        }else{
            console.warn("There is no edge b/w src an dest");
        }

    }else{
        console.warn("There is no edge b.w src and dest");
    }
}
JSDGraph.prototype.getAllVertices = function(){
    return this._vertices;
}
JSDGraph.prototype.getAdjacentVertices = function(node){
    var neighbours = [];
    if(node.constructor.name == "JSDNode"){
        var nodeIndex = this._vertices.indexOf(node);
        if(nodeIndex >= 0){
            var neighboursList = this._adjecencyList[nodeIndex];
            for(var i=0; i<neighboursList.length;i++){
                neighbours.push(this._vertices[neighboursList[i]]);
            }
        }else{
            console.warn("Invalid Node");
        }


    }else{
        console.warn("Invalid node");
    }
    return neighbours;
}

JSDGraph.prototype.getOutdegree = function(node){
    var outdegree = 0;
    if(node.constructor.name == "JSDNode"){
        var nodeIndex = this._vertices.indexOf(node);
        if(nodeIndex >=0){
            outdegree = this._adjecencyList[nodeIndex].length;
        }else{
            console.warn("Invalid Node");
        }
    }else{
        console.warn("Invalid Node");
    }
    return outdegree;
}

JSDGraph.prototype.getIndegree = function(node){
    var indegree = 0;
    if(node.constructor.name == "JSDNode"){
        var nodeIndex = this._vertices.indexOf(node);
        if(nodeIndex >=0){
            for(var i=0; i<this._vertices.length;i++){
                for(var j=0;j<this._adjecencyList[i].length;j++){
                    if(this._adjecencyList[i][j] == nodeIndex){
                        indegree++;
                        break;
                    }
                }
            }

        }else{
            console.warn("Invalid Node");
        }

    }else{
        console.warn("Invalid Node");
    }
    return indegree;
}

JSDGraph.prototype.toJson = function(){
    var responseJson = {
        Vertices:this._vertices,
        AdjecencyList:this._adjecencyList
    }
    return responseJson;
}
JSDGraph.prototype.toString = function(){
    var responseJson = this.toJson();
    return JSON.stringify(responseJson);
}

JSDGraph.prototype.loadFromJson = function(graphJsonObj){
    this._vertices = graphJsonObj.Vertices;
    this._adjecencyList = graphJsonObj.AdjecencyList;
}

JSDGraph.prototype.dfs = function(node){
    var nodeIndex = this._vertices.indexOf(node);
    var vistedList = [];
    if(node.constructor.name == "JSDNode" && nodeIndex >=0){
        var vistedNode = [nodeIndex];
        this._visitNode = [nodeIndex];
        this._visitDfs(this._adjecencyList[nodeIndex],vistedNode);
        for(var i=0;i<vistedNode.length;i++){

            var vertexToAdd = this._vertices[vistedNode[i]];
            if(vistedList.indexOf(vertexToAdd) <0){
                vistedList.push(vertexToAdd);
            }
            
        }
    }
    return vistedList;
}
JSDGraph.prototype._visitDfs = function(nodesList,visited){
    for(var i=0;i<nodesList.length;i++){
        if(visited.indexOf(nodesList[i] < 0)){
            visited.push(nodesList[i]);
            this._visitDfs(this._adjecencyList[nodesList[i]],visited);
        }
    }
}

JSDGraph.prototype.bfs = function(node){
    var nodeIndex = this._vertices.indexOf(node);
    var vistedList = [];
    if(node.constructor.name == "JSDNode" && nodeIndex >=0){
        var vistedNode = [nodeIndex];
        var nodesToProcess = [nodeIndex];
        this._visitBfs(nodesToProcess,vistedNode);
        for(var i=0;i<vistedNode.length;i++){

            var vertexToAdd = this._vertices[vistedNode[i]];
            if(vistedList.indexOf(vertexToAdd) <0){
                vistedList.push(vertexToAdd);
            }
        }
    }
    return vistedList;
}
JSDGraph.prototype._visitBfs = function(nodesToProcess,visited){
    while(nodesToProcess.length >0){
        var currentNode = nodesToProcess.splice(0,1);
        currentNode = currentNode[0];
        if(visited.indexOf(currentNode) <0){
            visited.push(currentNode);
        }
        var currentNodeChildren = this._adjecencyList[currentNode];
        for(var i=0;i<currentNodeChildren.length;i++) {
            if(visited.indexOf(currentNodeChildren[i] <0)){
                visited.push(currentNodeChildren[i]);
                if(nodesToProcess.indexOf(currentNodeChildren[i] <0)){
                    nodesToProcess.push(currentNodeChildren[i]);
                }
            }
        }



    }
}
//applicable only for nodejs/npm
if (typeof module != 'undefined' && module != null) {
     module.exports.graph = JSDGraph;
     module.exports.node = JSDNode;
}else{
    //for client side export
    if (typeof JCF === 'undefined' || JCF == null) {
        JCF = {}
    }
    JCF.Graph = JSDGraph;
    JCF.GraphNode = JSDNode;
}