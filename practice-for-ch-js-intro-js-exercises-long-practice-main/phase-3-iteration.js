// Your code here

Array.prototype.bubbleSort = function(){

    let sorted = false 
    while (!sorted){
        sorted = true 

        for (let i = 0; i < this.length; i++){
            if (this[i] > this[i + 1]){
                temp = this[i]
                this[i] = this[i + 1]
                this[i + 1] = temp 
                sorted = false 
            }
        }

    }
    return this 
}

console.log([3, 2, 4, 1, 5, 2].bubbleSort());


String.prototype.substrings = function(){
    let newArr = []
    for (let i = 0; i <= this.length; i++){
        for (let j = i + 1; j <= this.length; j++){
            let substring = this.slice(i, j)
            if (substring.length > 1){
                newArr.push(substring) 
            }
    
        }
    }
    return newArr 
}

console.log("hello".substrings());
