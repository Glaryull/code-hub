function solution(binomial) {
    var answer = binomial.split(' ');
    switch(answer[1]){
        case '+':
            return Number(answer[0])+Number(answer[2]);
        case '-':
            return answer[0]-answer[2];
        case '*':
            return answer[0]*answer[2]
    }
    
}