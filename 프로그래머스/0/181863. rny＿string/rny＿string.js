function solution(rny_string) {
    var answer = [...rny_string]
    let cnt = [];
    for (let i of answer){
        if(i ==='m')
         cnt.push(1)
        else
         cnt.push(0)
        
    }
    for(let i=0;i<cnt.length;i++){
        if(cnt[i]===1){
            answer.splice(i,1,'rn')
           
        }
    }
    return answer.join('')
}