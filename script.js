function mincost(arr)
{ 
//write your code here
// return the min cost

	arr.sort();
while(arr.length > 1){
    let a = arr.shift();
    let b = arr.shift();
    arr.push(a + b);
    arr.sort();
}
return arr.pop();
}

module.exports=mincost;
