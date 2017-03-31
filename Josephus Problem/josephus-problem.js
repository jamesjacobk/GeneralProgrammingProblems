n = 8; 
//logn = Math.log(n)/Math.LN2;
logn = Math.log2(n);
if(logn % 1 === 0.0)
{
    console.log(1);
}
else
{
    y = logn/10;
    if(y < 1)
        y = Math.floor(logn / 1.0);
    y = Math.pow(2,y);
    val = n - y;
    console.log(val * 2 + 1);
}