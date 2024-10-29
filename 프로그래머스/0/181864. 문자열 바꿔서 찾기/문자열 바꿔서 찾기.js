function solution(myString, pat) {
    var answer = 0;
    let repArray=[];
    for(let i =0;i<myString.length;i++){
        if(myString[i]==='A')
            repArray.push(myString[i].replace('A','B'))
        else{
            repArray.push(myString[i].replace('B','A'))
        }
    }
    repArray = repArray.join("")
    
     if(repArray.includes(pat))
        return 1;
     else
        return 0;
}   