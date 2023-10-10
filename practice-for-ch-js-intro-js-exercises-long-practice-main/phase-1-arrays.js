// Your code here

Array.prototype.uniq = function() {

    let obj = {};

    // this.forEach((ele) => {
    //     if (obj[ele] === null) {
    //     obj[ele] = 0 
    //     }
    //     else 
    //     {
    //     obj[ele] += 1
    //     }
    // }
    // )

    
    
    for (let i = 0; i < this.length; i++){
        let ele = this[i];
        if (obj[ele] === undefined) {
            obj[ele] = 1;
        } 
    }
    return obj.keys;
}

const newArray = [1,2,2,3,3,3]

console.log(newArray.uniq());

// console.log(Array.prototype.uniq);



