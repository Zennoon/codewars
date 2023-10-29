function all_permuted(arr_length)
{
    return get_permut_recurcive(arr_length, 0, 1, 3);
}

function get_permut_recursive(arr_length, a, b, i)
{
    if (arr_length == 1)
    {
        return (a);
    }
    if (arr_length == 2)
    {
        return (b);
    }
    return get_permut_recursive(arr_length - 1, b, (i - 1) * (a + b), i + 1);
}