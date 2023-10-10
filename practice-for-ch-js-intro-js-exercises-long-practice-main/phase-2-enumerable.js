// Your code here
function doubler(num){
    return num * 2;
}

Array.prototype.myEach = function(callback) {
    
    for (let i = 0; i < this.length; i++){
        callback(this[i])
    }

}

    Array.prototype.myMap = function(callback){
        let newArr = [];
        // for (let i = 0; i < this.length; i++){
        //     newArr.push(callback(this[i]));
        // }
        this.myEach(function(ele) {
            newArr.push(callback(ele))
        })
        // this.myEach(ele => newArr.push(callback(ele)))

        return newArr;
    }


// console.log([1, 2, 3, 4, 5].myEach(callback));
// console.log([1, 2, 3, 4, 5].myMap(doubler));


Array.prototype.myReduce = function(callback, initialValue) {
    let acc;
    let arr;
    if (initialValue !== undefined) {
        acc = initialValue;
        arr = this;
    } else {
        acc = this[0];
        arr = this.slice(1);
    }
    
    arr.myEach(function(ele) {
        acc = callback(acc, ele)
    }) 

    // arr.myEach(callback)

    return acc
}

console.log([1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
  })); // => 6

  // with initialValue
console.log([1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
    }, 25)); // => 31