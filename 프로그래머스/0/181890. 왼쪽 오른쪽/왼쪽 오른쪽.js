function solution(str_list) {
    var answer = [];
    let lim=0;
    for(let i=0;i<=str_list.length;i++){
        if(str_list[i]==='l'){
            answer = str_list.slice(0,i);
            break;
        }
        else if(str_list[i]==='r'){
            answer =  str_list.splice(i+1);
            break;
        }
        else if(str_list[i]!=='l' && str_list[i]!=='r')
            answer = [];
            
    }
    return answer;
}