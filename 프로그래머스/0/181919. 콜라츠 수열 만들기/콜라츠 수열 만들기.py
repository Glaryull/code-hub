def solution(n):
    answer = []
    for i in range(n,1,-1):
        if(n==1):
            answer.append(n)
            break
        if(n%2==0):
            answer.append(n)
            n=n/2
        else:
            answer.append(n)
            n = 3*n+1
            
            
    return answer