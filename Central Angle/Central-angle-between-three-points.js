const pi = 3.14159265359;
 
var from = 0.0;
if (from !== 0 && from % pi === 0)
{
    if (from > 0)
        from = pi;
    else
        from = -pi;
}
 
var via = pi/2;
 
if (via !== 0 && via % pi === 0)
{
    if (via > 0)
        via = pi;
    else
        via = -pi;
}
 
var to = -pi/2;
 
if (to !== 0 && to % pi === 0)
{
    if (to > 0)
        to = pi;
    else
        to = -pi;
}
 
var angle1 = via - from;
if (angle1 < 0)
    angle1 = -angle1;
var angle2 = to - via;
if (angle2 < 0)
    angle2 = -angle2;
var finalangle = angle1 + angle2;
 
if ((to - from) < (via - from) + (to - via))
{
    if(finalangle > 0)
        finalangle = -finalangle;
}
 
console.log(finalangle);