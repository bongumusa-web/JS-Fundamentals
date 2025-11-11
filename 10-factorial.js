const n = parseInt(process.argv[2], 10);

// Recursive factorial function
function factorial(num) {
    if (isNaN(num) || num <= 0) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(n))
