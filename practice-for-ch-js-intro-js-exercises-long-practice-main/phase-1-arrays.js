// Your code here

Array.prototype.uniq = function() {
    // let obj = {};
    // for (let i = 0; i < this.length; i++){
    //     let ele = this[i];
    //     if (obj[ele] === undefined) {
    //         obj[ele] = 1;
    //     } 
    // }
    // return Object.keys(obj);
    let newArr = []
    for (let i  = 0; i < this.length; i++) {
        if(!newArr.includes(this[i])) {
            newArr.push(this[i])
        }
    }
    return newArr
}
// console.log([1,2,2,3,3,3].uniq());

Array.prototype.twoSum = function() {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                newArr.push([i, j])
            }
        }
    }
    return newArr
}

// console.log([-1, 0, 2, -2, 1].twoSum()) // => [[0,4] [2,3]]

Array.prototype.transpose = function() {
    // let newArr = []
    // for (let i = 0; i < this.length; i++) {
    //     let subArr = this[i]
    //     for (let j = 0; j < subArr.length; j++ ) {
    //         newArr.push(subArr[j])
    //     }
    // }
    // return newArr

    
    // i = 0
    // while (i < this.length) {
    //     newArr.push([])
    //     i += 1
    // }

    let newArr = []
    for ( i = 0; i < this.length; i++) {
        let row = [];
        for ( j = 0; j < this.length; j++ ) {
            row.push(this[j][i])
        }
        newArr.push(row)
    }
    return newArr
}

// console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose()) // => [[0,3,6], [1,4,7], [2,5,8]]





