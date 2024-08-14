function solution(my_string, m, c) {
    var answer = '';
    const my_arr = my_string.split('');
    for (let i =c-1; i < my_arr.length ;i+=m ){     
          answer += my_arr[i];
    }
    return answer;
}