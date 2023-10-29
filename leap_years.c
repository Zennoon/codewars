#include <stdio.h>

/**
 * is_leap_year - Determines if a given year is a leap year or not
 * @year: The year to be checked
 *
 * Description: A leap year is one that is divisible by 4, but not a 100
 * except if it is divisible by 400
 * Return: 1 if the given year is a leap year, 0 otherwise
 */
int is_leap_year(int year)
{
    if ((!(year % 4) && (year % 100)) || !(year % 400))
    {
       return 1;
    }
    return 0;
}
