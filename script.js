function mincost(arr)
{ 
	//write your code here
	// return the min cost
	arr.sort();
	let sum = 0;
	while(arr.length > 1){
	    let a = arr.shift();
	    let b = arr.shift();
		sum += a + b;
	    arr.push(a + b);
	    arr.sort();
	}
	return sum;
}

module.exports=mincost;
