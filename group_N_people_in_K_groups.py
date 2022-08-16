def calculate(pos, prev, left, k):
     
    # Base Case
    if (pos == k):
        if (left == 0):
            return 1
        else:
            return 0
 
    # If N is divides completely
    # into less than k groups
    if (left == 0):
        return 0
 
    answer = 0
 
    # Put all possible values
    # greater equal to prev
    for i in range(prev, left + 1):
        answer += calculate(pos + 1, i,
                           left - i, k)
 
    return answer
 
# Function to count the number of
# ways to divide the number N
def countWaystoDivide(n, k):
     
    return calculate(0, 2, n, k)
 
# Driver Code
if __name__ == '__main__':
    
    # Change N depends on test cases.
    N = 4
    K = N // 2
    result = 0
    for i in range(1,K+1):
        ways = countWaystoDivide(N, i)
        result +=ways
        print(f'Split {N} people in {i} group: {ways} ways.')
    print(f"Final result is: {result}")


