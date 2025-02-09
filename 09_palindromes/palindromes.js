const isCharValid = function(char) {
    return (char >= "a" && char <= "z") || (char>="0" && char<="9");
}
const palindromes = function (str) {
    let i = 0;
    let j = str.length-1;
    const strLower = str.toLowerCase();
    while (j>i) {
        if (!isCharValid(strLower[i])) {
            i++;
        } else if (!isCharValid(strLower[j])) {
            j--;
        } else if (strLower[i]!=strLower[j]) {
            return false;
        } else {
            i++;
            j--;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
