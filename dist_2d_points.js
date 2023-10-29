function distance_between_points(a, b)
{
    let dist;

    dist = Math.sqrt((Math.pow((a.x - b.x), 2)) + (Math.pow((a.y - b.y), 2)));
    return (dist);
}

let a = {
    x : 6, 
    y : 1
};

let b = {
    x : 2,
    y : 4
};

console.log(distance_between_points(a, b));