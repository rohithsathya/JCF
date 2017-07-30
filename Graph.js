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