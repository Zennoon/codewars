#include <stdlib.h>
#include <string.h>
/**
 * to_alternating_case - Given a string, returns a new string with all the chars to alternated case
 * @s: The string to be altered
 *
 * Return: A new string with all of s characters' case alternated
 */
#include <string.h>
#include <stdlib.h>
char *to_alternating_case(const char *s)
{
    int i;
    int len = strlen(s);
    char *cpy = malloc(sizeof(char) * (len + 1));
    char *ptr;

    ptr = s;
    for (i = 0; i < len; i++)
    {
        if (*ptr >= 65 && *ptr <= 90)
        {
            cpy[i] = *ptr + 32;
        }
        else if (*ptr >= 97 && *ptr <= 122)
        {
            cpy[i] = *ptr - 32;
        }
        else
        {
          cpy[i] = *ptr;
        }
        ptr++;
    }
    cpy[i] = '\0';
    return (cpy);
}
