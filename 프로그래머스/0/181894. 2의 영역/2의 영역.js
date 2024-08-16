function solution(arr) {
    var answer = [];
    let temp = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]===2){
            temp.push(i);
        }         
    }
    if(temp.length===0){
        return [-1]
    }
    let max = Math.max(...temp);
    let min = Math.min(...temp);
    
    answer = arr.slice(min,max+1)
    return answer
}