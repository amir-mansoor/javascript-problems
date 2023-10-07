function getSum(arr,target) {
	for(let i = 0; i < arr.length; i++) {
		for(let j = i+1; j < arr.length; j++) {
			if(arr[i] + arr[j] === target) {
				return [i,j]
			}
		}
	}
}

let result = getSum([3,3], 6)
console.log(result)
