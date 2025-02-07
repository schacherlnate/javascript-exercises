const sumAll = function(num1, num2) {
    let sum = 0;

    // Make sure that our inputs are positive integers
    if (typeof(num1)!='number' || typeof(num2)!='number' ||
                    !Number.isInteger(num1) || !Number.isInteger(num2) ||
                    num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    // We want to sum for the range regardless of input order
    let smallerNum = Math.min(num1, num2);
    let biggerNum = Math.max(num1, num2);

    for (let i = smallerNum; i<=biggerNum; i++) {
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
