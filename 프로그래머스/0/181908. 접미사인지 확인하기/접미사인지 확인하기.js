function solution(my_string, is_suffix) {
    var answer = [];
    const sub_arr = [];
    for (let i in my_string){
        sub_arr.push(my_string.slice(i));
    }
    const index = sub_arr.indexOf(is_suffix);
        if(index >= 0 )
            answer = 1;
        else
            answer = 0;
return answer;
}

