function ds_mult_of_pfs(n1, n2)
{
    let i;
    let output_arr = [];
    
    for (i = n1; i <= n2; i++)
    {
        if (is_dvs_mult_of_pfs(i))
        {
            output_arr.push(i);
        }
    }
    return (output_arr);
}

function is_dvs_mult_of_pfs(n)
{
    let i;
    let sum_divs = 0;

    for (i = 1; i <= Math.sqrt(n); i++)
    {
        if (!(n % i))
        {
            sum_divs += i;
            sum_divs += n / i;
        }
    }
    return (sum_divs % get_pf_sum(n) == 0)
}

function is_prime(n)
{
    let i;
    if (n == 1)
    {
        return (false);
    }
    if (n == 2)
    {
        return (true)
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

function get_pf_sum(n)
{
    let pf_sums = 0;
    let i = 2;

    while (n > 1)
    {
        if (is_prime(i) && (n % i) == 0)
        {
            pf_sums += i;
            n /= i;
            i = 2;
        }
        else
        {
            i++;
        }
    }
    return (pf_sums)
}

function get_pf_sum2(n)
{
    let i;
    let pf_sum = 0;
    
    for (i = 2; i <= Math.sqrt(n); i++)
    {
        while (!(n % i))
        {
            pf_sum += i;
            n /= i;
        }
    }
    if (n > 1)
    {
        pf_sum += n;
    }
    return (pf_sum);
}

let num = 2045;
console.log(ds_mult_of_pfs(10, 100))