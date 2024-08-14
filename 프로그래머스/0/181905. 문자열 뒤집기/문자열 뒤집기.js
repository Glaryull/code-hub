function solution(my_string, s, e) {
    var answer = '';
    const my_arr = my_string.split("");
    
    if(e-s>0){
    const sub_arr = my_arr.slice(s,e+1);
    const temp_arr = sub_arr.reverse();
    answer = my_arr.slice(0,s).concat(temp_arr, my_arr.slice(e+1)).join('');
    }
    else
    answer = my_string;
    
    return answer;
}