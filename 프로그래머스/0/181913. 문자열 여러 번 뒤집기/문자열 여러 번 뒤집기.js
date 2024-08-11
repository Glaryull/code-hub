function solution(my_string, queries) {
    
    let my_arr = my_string.split('')
    let sub_arr = my_arr.Array
    for (let [s,e] of queries){
        sub_arr = my_arr.slice(s,e+1).reverse();
        my_arr.splice(s,e-s+1, ...sub_arr);
    }
    
    return  my_arr.join('');
}