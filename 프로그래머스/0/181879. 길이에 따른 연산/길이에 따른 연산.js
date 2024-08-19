function solution(num_list) {
    var answer = 1;
    let sum=0;
    for(let i of num_list){
        if(num_list.length>=11){
            sum+=i;
        }
        else{
             answer*=i;
        }
    }
    
    return num_list.length>=11? sum : answer;
}