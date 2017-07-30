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