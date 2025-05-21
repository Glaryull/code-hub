function solution(myStr) {
    var answer = myStr.split('');
    let len = answer.length
    
    for(let i=0;i<len-1;i++){
        
    }
    
    let res = myStr.split(/[abc]/)
    
    let arr = res.filter(res => res !== '')
    
    
    return arr.length>0? arr: arr=["EMPTY"] 
}