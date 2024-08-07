def solution(ineq, eq, n, m):
    
    if ineq == ">" and eq == "=":
        answer = (n >= m)
    elif ineq == "<" and eq == "=":
        answer = (n <= m)
    elif ineq == ">" and eq == "!":
        answer = (n > m)
    elif ineq == "<" and eq == "!":
        answer = (n < m)
        
    if answer == True:
        return 1
    else:
        return 0
