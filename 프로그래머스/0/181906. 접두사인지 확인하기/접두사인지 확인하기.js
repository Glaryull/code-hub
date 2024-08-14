function solution(my_string, is_prefix) {
    var answer = 0;
    const sub_arr = [];
    for (let i = 0; i<my_string.length;i++){
        sub_arr.push(my_string.slice(0,i+1));
    }
    const index = sub_arr.indexOf(is_prefix);
        if(index >= 0 )
            answer = 1;
        else
            answer = 0;
return answer
 
}
    
  