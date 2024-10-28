function solution(myString) {
    var answer = myString.split('x')
    let array=[]
    for(let i=0;i< answer.length;i++){
        if(answer[i].length>0){
            array.push(answer[i]);
        }
    }
 return array.sort()   
}