//Josephus problem - Unoptimized

i = 0;
p = [];
n = 11;

for(var x = 0; x < n; x++)
{
    p[x] = x;
}

last = p[p.length-1];

if(p.length > 1)
{
    for(var x = 1; x < p.length; x = x + 1)
    {
        p.splice(x, 1);
    }
}

while(p.length != 1)
{
    var i = (last != p[p.length-1])? 1 : 0;
    last = p[p.length-1];
    for(var x = i; x < p.length; x = x + 1)
    {
        p.splice(x, 1);
    }
}

console.log(p[0]);