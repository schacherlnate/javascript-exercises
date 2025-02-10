const fibonacci = function(n) {
    let res = (n < 0)? "OOPS":
                (n==0) ? 0:
                    (n <= 2) ? 1: fibonacci(n-1) + fibonacci(n-2);
    return res
};

// Do not edit below this line
module.exports = fibonacci;
