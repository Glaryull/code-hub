function solution(myString) {
    var answer = myString.split('x');
  
    let list = [];
    let value=[];
    for (let i of answer ){
        value.push(i.length)
    } //값을순회
    
    return value;
}