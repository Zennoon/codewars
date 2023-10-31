#include <stdio.h>

/**
 * hero - Given a number of bullets and a number of dragons, it returns whether the bullets are enough
 * @bullets: The amount of bullets our hero has
 * @dragons: The number of dragons our hero has to take on
 *
 * Description: It takes 2 bullets to take out 1 dragon
 * Return: 1 if bullets is enough to kill dragons, 0 otherwise
 */
int hero(bullets, dragons)
{
    return (bullets / dragons >= 2);
}