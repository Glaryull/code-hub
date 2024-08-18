function solution(arr) {
    var answer = 0;
    let x=0;
    let temp = arr.slice();  
    
    while(1){
        answer = 0;
        for(let i=0;i<arr.length;i++){ //첫번째문장
        if(arr[i]>=50 && arr[i]%2==0){
            arr[i]/=2;
            }
        else if(arr[i]<50 && arr[i]%2==1){
            arr[i]= arr[i]*2 + 1;
            }
         }   
        for(let j =0;j<arr.length;j++){ //두번재문장
            if(arr[j]===temp[j]){
                answer++;
                }
            if(answer=== arr.length){
                return x
                }
            }//배열끼리 비교
        temp = arr.slice();
        x++;  //x값증가
        }
    return temp
    }
