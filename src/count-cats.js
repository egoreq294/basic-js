  module.exports = function countCats(matrix) {
let arr=[];
let count = 0;
for(let i in matrix){
  for(let j in matrix[i]){
    arr.push(matrix[i][j]);
  }
}
for(let i in arr){
  (String)(arr[i]).replace(/\s/g, '');
  if(arr[i]==='^^') count++;  
}
return count;
};