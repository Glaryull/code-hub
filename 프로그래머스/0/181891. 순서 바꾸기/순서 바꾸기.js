function solution(num_list, n) {
    var answer = [];
    answer = answer.concat(num_list.splice(n));
    answer = answer.concat(num_list.slice(0,n));
    return answer;
}