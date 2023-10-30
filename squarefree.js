function square_free_part(num)
{
    let i = num;
    let div = 1;

    while (i >= 1)
    {
        i = Math.floor(num / div);

        if (!(num % i))
        {
            let j = 2;
            let is_sqr_free = true;

            while ((j ** 2) <= i)
            {
                if (!(i % (j ** 2)))
                {
                    is_sqr_free = false;
                    break;
                }
                j++;
            }
            if (is_sqr_free)
            {
                return (i);
            }
        }
        div++;
    }
}