function solution(num_list) {
    var answer = 0;
    for(let i=0;i<num_list.length;i++){
        if(Math.sign(num_list[i])==-1){
            return  i;
        }
        else 
            answer = -1;
    }
 return answer
}