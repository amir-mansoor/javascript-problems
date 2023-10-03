let num1 = 5;
let num2 = 10;

function swap(a,b) {
    [a,b] = [b,a]

    return [a,b]
}

[num1,num2] = swap(num1,num2)

console.log(num1,num2)
