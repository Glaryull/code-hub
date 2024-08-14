function solution(q, r, code) {
    var answer = '';
    const code_arr = code.split('');
    
    for (let i = r ; i< code.length; i+=q){
        answer += code[i]
    }
    
    return answer;
}