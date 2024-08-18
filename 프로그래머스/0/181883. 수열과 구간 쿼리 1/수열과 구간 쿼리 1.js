function solution(arr, queries) {
    var answer = [];
    for(let i=0;i<queries.length;i++){ //쿼리배열길이만큼 루프
        for(let j = queries[i][0]; j<=queries[i][1];j++){ //어레이의 인덱스 j가  쿼리s ~쿼리 e 의 값 arr[j]
      
            arr[j]++;
        }
    }
    return arr
}