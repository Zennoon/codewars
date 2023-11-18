#include <stdlib.h>

/**
*/
void climb(unsigned long long n, *sequence)
{
    int *ptr;
    ptr = sequence + ((sizeof(sequence) / sizeof(unsigned long long)) - 1);
    while (n >= 1)
    {
        *ptr = n;
        n /= 2;
        ptr--;
    }
}