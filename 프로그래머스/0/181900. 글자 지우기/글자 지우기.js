function solution(my_string, indices) {
    var answer = '';
    let my_arr = my_string.split('');
    indices.sort(function (a,b){
        return b-a;
    });
    
    for (let i of indices){
        my_arr.splice(i,1);
    }
   
    return  my_arr.join('');
}