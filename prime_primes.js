function is_prime(n)
{
    let i;
    if (n == 1)
    {
        return (false);
    }
    if (n == 2)
    {
        return (true);
    }
    if (!(n % 2))
    {
        return (false);
    }
    for (i = 3; i <= Math.sqrt(n); i += 2)
    {
        if (!(n % i))
        {
            return (false);
        }
    }
    return (true);
}

function prime_primes(n)
{
    let i;
    let j;
    let primes = [];
    let count = 0;
    let sum = 0;
    for (i = 2; i < n; i++)
    {
        if (is_prime(i))
        {
            primes.push(i);
        }
    }
    for (i = 0; i < (primes.length - 1); i++)
    {
        for (j = i + 1; j < primes.length; j++)
        {
            count += 1;
            sum += primes[i] / primes[j];
        }
    }
    return [count, Math.floor(sum)];
}

let num = 6;
console.log(prime_primes(num));