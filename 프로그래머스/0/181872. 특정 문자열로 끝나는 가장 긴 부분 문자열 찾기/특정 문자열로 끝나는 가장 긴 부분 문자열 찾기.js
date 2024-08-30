function solution(myString, pat) {
    
    let answer = myString.lastIndexOf(pat);
    
    return myString.slice(0,answer+pat.length);
}