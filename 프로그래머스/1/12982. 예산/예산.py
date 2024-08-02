def solution(d, budget):
    answer = 0
    sort_d = sorted(d)
    cnt = 0
    
    for i in sort_d:
        cnt += i
        if(cnt>budget):
            break
        answer +=1
    
    return answer