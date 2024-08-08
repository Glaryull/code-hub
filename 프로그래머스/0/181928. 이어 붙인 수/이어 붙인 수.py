def solution(num_list):
    num_odd=''
    num_even=''

    for i in num_list:
        if ( i % 2 == 1 ):
            num = str(i)
            num_odd += num
        else:
            num = str(i)
            num_even += num
    answer = int(num_odd) + int(num_even)
    return answer
