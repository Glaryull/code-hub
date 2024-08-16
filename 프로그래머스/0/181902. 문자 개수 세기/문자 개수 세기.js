function solution(my_string) {
    var answer = new Array(52);
    const main_arr = my_string.split('');
   
    answer.fill(0,0,52);
    
    for(let i=0;i<main_arr.length;i++){
        if(my_string[i].charCodeAt()<=90){
            answer[my_string[i].charCodeAt()-65]+=1;
        }
        else if(my_string[i].charCodeAt()>=97)
            answer[my_string[i].charCodeAt()-65-6]+=1
    }
    return answer;
}