const repeatString = function(str, numRep) {
    if (numRep < 0) {
        return 'ERROR';
    }
    
    let i = 0;
    let repStr = "";
    while (i < numRep) {
        repStr = repStr.concat(str);
        i++;
    }
    return repStr;
};

// Do not edit below this line
module.exports = repeatString;
