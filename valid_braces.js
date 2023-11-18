function validBraces(braces){
    let i, len = 0;
    let stack = [];
    let opening_braces = "[({";
    let closing_braces = "])}";
    
    for (i = 0; i < braces.length; i++)
    {
        if (opening_braces.includes(braces[i]))
        {
            stack.push(braces[i]);
            len++;
        }
        else if (closing_braces.includes(braces[i]))
        {
            if (len > 0 && opening_braces.indexOf(stack[len - 1]) == closing_braces.indexOf(braces[i]))
            {
                stack.pop();
                len--;
            }
            else
            {
                return (false);
            }
        }
    }
    return (len === 0);
}