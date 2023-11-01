#include <stdio.h>
#include <string.h>

/**
 * is_panagram - Checks if a given string is a panagram or not
 * @s: The string to be checked
 *
 * Description: A panagram is a string, or a collection of characters
 * that contain all the letters of the alphabet (case insensitive)
 * Return: 0 if s is not a panagram, a non-zero number otherwise
 */
int is_panagram(char *s)
{
    char c;

    c = 'a';
    while (c <= 'z')
    {
        if (!(strchr(s, c)) && !(strchr(s, c - 32)))
        {
            return (0);
        }
        c++;
    }
    return (1);
}