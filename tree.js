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

