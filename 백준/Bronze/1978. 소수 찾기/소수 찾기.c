#include <stdio.h>
int main() {
    int n, cnt = 0;
    
    scanf("%d", &n);
    
    for (int i = 0; i < n; i++) {
        int num;
        scanf("%d", &num);
        if (num > 1) {
            cnt++;
        for (int j = 2; j < num ; j++) {
                if (num % j == 0) {
                    cnt--;
                    break;
                }
            }
        }
    }
    
    printf("%d", cnt);
    
    return 0;
}
