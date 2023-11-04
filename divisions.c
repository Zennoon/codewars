/**
 * divisions - Given two numbers, calculate how many times the first can be divided by the second
 * @n: The first number
 * @div: The second number (divisor)
 *
 * Return: How many times n can be divided by div
 */
 unsigned long long divisions(unsigned long long n, unsigned long long div)
 {
    unsigned long long count;

    count = 0;
    while (n >= div)
    {
        n /= div
        count++;
    }
    return (count);
 }