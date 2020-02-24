module.exports = function transform(arr) {
    let arr1 = [];
    let length = arr.length;
    if (Array.isArray(arr) == false){
        return error
    }
    else{
        for(let i = 0; i < length; i++){
            if (arr[i]==='--discard-next'){
                if (i+1<length){
                    i+=1;
                }
            }
            else if  (arr[i]==='--discard-prev'){
                if (i-1>=0){
                    arr1.pop()
                }
            }
            else if(arr[i] == '--double-next'){
                if(i+1<length)
                arr1.push(arr[i+1]);
            }
            else if(arr[i] == '--double-prev'){
                if(i-1>=0)
                arr1.push(arr[i-1]);
            }
            else arr1.push(arr[i]);
        }
        return arr1;
    }
};
