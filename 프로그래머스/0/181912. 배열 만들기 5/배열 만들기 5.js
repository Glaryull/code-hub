function solution(intStrs, k, s, l) {
    var answer = [];
    for (let i in intStrs){
       let sub_arr = Number(intStrs[i].slice(s,s+l));
        if(sub_arr>k){
             answer.push(sub_arr);
        }
    }
    return answer;
}