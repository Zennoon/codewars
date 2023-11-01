function dominant_arr_elems(arr)
{
    let max, i;
    let dom_elems = [];

    max = arr[arr.length - 1];
    dom_elems.push(max);
    for (i = arr.length - 2; i >= 0; i--)
    {
        if (arr[i] > max)
        {
            dom_elems.push(arr[i]);
            max = arr[i]
        }
    }
    dom_elems.reverse();
    return (dom_elems);
}