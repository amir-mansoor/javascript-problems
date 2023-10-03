let a = [1,2,3,4]

function reverse(arr) {
    let start = 0;
    let end = arr.length - 1

    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        end--;
    }

}

reverse(a)

console.log(a)
