const removeFromArray = function(arr, ...remTheseVals) {

    const returnArr = [];

    for (let i = 0; i < arr.length; i++) {
        let testNum = arr[i];
        let isGood = true;
        for (let j = 0; j < remTheseVals.length; j++) {
            let badNum = remTheseVals[j];
            if (testNum===badNum) {
                isGood = false;
                break;
            }
        }
        if (isGood) {
            returnArr.push(testNum);
        }
    }
    return returnArr
};

// Do not edit below this line
module.exports = removeFromArray;
