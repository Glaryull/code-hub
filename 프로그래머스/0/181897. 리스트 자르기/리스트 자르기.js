function solution(n, slicer, num_list) {
    var answer = [];
    const a = slicer[0];
    const b = slicer[1];
    const c = slicer[2];
    
    switch(n){
        case 1: 
            answer =num_list.slice(0,b+1);
            break;
        case 2: 
            answer =num_list.slice(a);
            break; 
        case 3: 
            answer =num_list.slice(a,b+1);
            break;
        case 4: 
            for (let i=a; i<=b; i+=c)
            answer.push(num_list[i]);
            break;
    }
    
    
    
    return answer;
}