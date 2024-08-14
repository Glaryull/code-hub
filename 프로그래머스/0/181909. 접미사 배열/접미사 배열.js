function solution(my_string) {
    var answer = [];
    const sub_arr = [];
    for (let i in my_string){
        sub_arr.push(my_string.slice(i));
    }
    sub_arr.sort();
    return sub_arr;
}