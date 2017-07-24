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