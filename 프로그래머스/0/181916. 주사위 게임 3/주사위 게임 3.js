function solution(a, b, c, d) {
    var answer = 0;
    
    let sol_arr = [a,b,c,d]; 
    let sub_arr = [0,0,0,0,0,0];
    let count=0;
    let temp=[];
    let value=0;
    let v_num=0;
    let v_value=0;
    
    for (let i=0 ; i<4;i++){ //메인 배열의 값이 섭어레이 인덱스 값을 하나씩 올림
        sub_arr[sol_arr[i]-1]+= 1; //섭어레이의 값을 올림
        }
    for (let i=0 ; i<6;i++){
        if(sub_arr[i] !=0 ){
            count +=1;
        }
    }
    
    switch(count){
        case 1:
            answer = a*1111;
            break;
        case 2:
            for(let i=0;i<6;i++){
                if(sub_arr[i]!=0){
                    temp.push(i+1);
                    if(sub_arr[i]==3){
                        value = 1;
                        v_num=i+1;
                    }
                    else if(sub_arr[i]==1)
                        v_value =i+1;
                }     
            } 
            if(value==1){
               answer = (10*v_num+v_value)**2 ;
            }
            else
            answer = (temp[0]+temp[1] )* Math.abs(temp[0]-temp[1]);
            
           
            
            
            break;
        case 3:
            for(let i=0;i<6;i++){
                if(sub_arr[i]==1){
                    temp.push(i+1);
                }
                
            }
            answer = temp[0] *temp[1];
            
            break;
        case 4:
            answer = Math.min(...sol_arr);
            
            break;
    }
    return answer
}