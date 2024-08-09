

def solution(arr, queries):
    tmp = ''
    for i,j in queries: # 행 i 열 j
     #값을 바꿈.. 
            tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp
        
    return arr