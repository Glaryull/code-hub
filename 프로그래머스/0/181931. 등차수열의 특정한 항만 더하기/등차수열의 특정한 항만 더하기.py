def solution(a, d, included):
    ans_arr = []
    answer = 0
    for i in range(len(included)):
        ans_arr.append(a + (d*i)) 
        if(included[i] == True ):
            answer += int(ans_arr[i])

    return answer