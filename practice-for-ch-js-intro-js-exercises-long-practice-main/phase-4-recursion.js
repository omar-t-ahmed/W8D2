// Your code here

function sumRec(arr){
    if (arr.length === 0){
        return null
    }
    
    return arr[0] + sumRec(arr.slice(1)) 
    
}

    console.log(sumRec([1, 2, 3]));


