<h1>CODEWARS</h1>
<h3>This repository was created to hold my answers/submissions for codewars katas, because I imagine I am going to need some of these code snippets for future projects</h3>
<h4>Below you will find some descriptions of my solutions</h4>
<ul>
    <li>dist_2d_points.js: Uses a simple geometry concept, the distance between two 2D points a and b = ((a.x - b.x)^2 + (a.y - b.y)^2) ^ 0.5</li>
    <li>leap_years.c: checks if a given year is a leap year or not using the definition of a leap year: divisible by 4, but not divisible by a 100, except if it is divisible by 400.</li>
    <li>split_integer.py: splits a given number into a a given number of even or almost even parts. So, for instance if we wish to split 18 to 8 parts, the output would be [2, 2, 2, 2, 2, 2, 3, 3]</li>
    <li>shuffle_up.js: Counts the number of permutations for an array of given length where no element is in their original place. I got confused with this one until I decided to brute force my way through it and saw what the output would look like for an array of length 5. That is when I started to see a pattern.
        <ul>
            <li>For an array of size 1 (say [1]), there is 0 such permutation.</li>
            <li>For an array of size 2 (say [1, 2]), there is 1 such permutation, starting with 2 ([2, 1])</li>
            <li>For an array of size 3 (say [1, 2, 3]), there are 2 such permutations, 1 starting with 2 ([2, 3, 1]), and 1 starting with 3 ([3, 1, 2])</li>
            <li>For an array of size 4 (say [1, 2, 3, 4]), there are 9 such permutations, 3 starting with 2, 3 starting 3, and the last 3 starting with 4</li>
            <li>For an array of length 5 (say [1, 2, 3, 4, 5]), there are 44 such permutations, 11 starting with 2, 11 starting with 3, 11 starting with 4, and another 11 starting with 5.</li>
        </ul>
    Now, if we look at the output of our function for these lengths, we start seeing something. For array lengths 1, 2, 3, 4, 5 we get the count of <code>0, 1, 2, 9, 44</code> Now this output can be disintegrated as follows
            <code>0, 1, 2, 9, 44 = 0, 1, 2 * 1, 3 * 3, 4 * 11</code></br>
            <code>0, 1, 2, 9, 44 = 0, 1, 2 * (1 + 0), 3 * (2 + 1), 4 * (9 + 2)</code></br>
            From this, we have a recursive definition for our function
            <strong><i>Base Case</i></strong></br>
            <ol>
                <li>all_permuted(1) = 0</li>
                <li>all_permuted(2) = 1</li>
            </ol>
            <strong><i>Recursive Call</i></strong></br>
            <ul><li>all_permuted(n) = (n - 1) * (all_permuted(n - 1) + all_permuted(n - 2))</li></ul>
            However, this recursive function would be horrendously inefficient. One, because it still has to do something (addition and multiplying) after the recursive calls, and second and mainly, it is making 2 recursive call, most of which are just repetitive. So, I have chosen to implement tail recursion using a helper function to at least reduce this inefficiency by eliminating the two mentioned drawbacks (the recursion call is the last thing the function does, and only one recursion call is made).
    </li>
</ul>