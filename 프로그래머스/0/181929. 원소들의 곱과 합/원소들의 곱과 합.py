def solution(num_list):
    num_sum = 0
    num_mul = 1
    
    for i in range(len(num_list)):
        num_sum += num_list[i]
        num_mul *= num_list[i]
        
    return 1 if (num_mul < num_sum**2) else 0