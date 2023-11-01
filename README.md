<h1 style="color: transparent; background: #00f; background-clip: text">CODEWARS</h1>
<h3>This repository was created to hold my answers/submissions for codewars katas, because I imagine I am going to need some of these code snippets for future projects</h3>
<h4>Below you will find some descriptions of my solutions</h4>
<ul>
    <li><h4>dist_2d_points.js</h4>: Uses a simple geometry concept, the distance between two 2D points a and b = ((a.x - b.x)^2 + (a.y - b.y)^2) ^ 0.5</li><br/>
    <li><h4>leap_years.c</h4>: checks if a given year is a leap year or not using the definition of a leap year: divisible by 4, but not divisible by a 100, except if it is divisible by 400.</li><br/>
    <li><h4>split_integer.py</h4>: splits a given number into a a given number of even or almost even parts. So, for instance if we wish to split 18 to 8 parts, the output would be [2, 2, 2, 2, 2, 2, 3, 3]</li><br/>
    <li><h4>shuffle_up.js</h4>: Counts the number of permutations for an array of given length where no element is in their original place. I got confused with this one until I decided to brute force my way through it and saw what the output would look like for an array of length 5. That is when I started to see a pattern.
        <ul>
            <li>For an array of size 1 (say [1]), there is 0 such permutation.</li>
            <li>For an array of size 2 (say [1, 2]), there is 1 such permutation, starting with 2 ([2, 1])</li>
            <li>For an array of size 3 (say [1, 2, 3]), there are 2 such permutations, 1 starting with 2 ([2, 3, 1]), and 1 starting with 3 ([3, 1, 2])</li>
            <li>For an array of size 4 (say [1, 2, 3, 4]), there are 9 such permutations, 3 starting with 2, 3 starting 3, and the last 3 starting with 4</li>
            <li>For an array of length 5 (say [1, 2, 3, 4, 5]), there are 44 such permutations, 11 starting with 2, 11 starting with 3, 11 starting with 4, and another 11 starting with 5.</li>
        </ul>
    Now, if we look at the output of our function for these lengths, we start seeing something. For array lengths 1, 2, 3, 4, 5 we get the count of <code>0, 1, 2, 9, 44</code> Now this output can be disintegrated as follows<br/>
            <code>0, 1, 2, 9, 44      =     0, 1, 2 * 1, 3 * 3, 4 * 11</code><br/>
            <code>0, 1, 2, 9, 44      =     0, 1, 2 * (1 + 0), 3 * (2 + 1), 4 * (9 + 2)</code><br/>
            From this, we have a recursive definition for our function</br>
            <strong><i>Base Case</i></strong><br/>
            <ol>
                <li><code>all_permuted(1) = 0</code></li>
                <li><code>all_permuted(2) = 1</code></li>
            </ol>
            <strong><i>Recursive Call</i></strong><br/>
            <ul><li><code>all_permuted(n) = (n - 1) * (all_permuted(n - 1) + all_permuted(n - 2))</code></li></ul>
            However, this recursive function would be horrendously inefficient. One, because it still has to do something (addition and multiplying) after the recursive calls, and second and mainly, it is making 2 recursive call, most of which are just repetitive. So, I have chosen to implement tail recursion using a helper function to at least reduce this inefficiency by eliminating the two mentioned drawbacks (the recursion call is the last thing the function does, and only one recursion call is made).
    </li><br/>
    <li><h4>make_negative.py</h4>: Pretty straight forward, just makes a number negative (if it isn,t already) using the unary - operator</li><br/>
    <li><h4>number_star_ladder.py</h4>: Given a number, the function returns a ladder of stars of length n that starts with 1 and ends with the number of stars in that line + 1</li><br/>
    <li><h4>easy_challenge.py</h4>: Given a number <code>num</code>, we are asked to return an array containing <br/>1. The number in another number base which only contains digits 1-9, not zero. So for example 10 would be 91 in this base system<br/>2. num number of 1s, so for example, 10 would output 10 1s or 1111111111. 0 would output 0. This was done using tail recursion, but I believe python doesn't have tail recursion optimization, so it doesn't affect the performance</li>
    <li><h4>squarefree.js</h4>: Given a number, the function returns the squarefree of that number. The squarefree of a number is the largest factor of a number which itself has no perfect square factors. So, for example, if 72 is our  number, the factors are 72, 36, 24, 18, 12, 6, 4, 3, 2, and 1. 72 can't be a squarefree because 72 has 36 which is a perfect square as a factor. 36 can't be a squarefree because it has 36 (6*6) as a factor. 24 can't be a squarefree because it has 4 (2**2) as a factor(2**2). 18 is invalid because of 9. 12 is invalid because of 4. 9 is invalid because of itself. 6 is valid. So, we return 6.</li>
    <li><h4>bullets_and_dragons.c</h4>: Given a specific number of bullets, it returns whether our hero can survive a fight against a given number of dragons, where it takes 2 bullets to kill 1 dragon.</li>
    <li><h4>panagram.c</h4>: Given a string, it checks if the string is a panagram or not. A panagram is a collection of characters that contains all the letters of the alphabet (case insensitive)</li>

</ul>