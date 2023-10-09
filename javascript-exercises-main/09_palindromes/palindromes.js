const palindromes = function (words) {
    let removeCapsAndPunc = words.toLowerCase().replace(/\W|_/g, '');
    let array = Array.from(removeCapsAndPunc);
    let reverseArray = Array.from(array).reverse();
    return JSON.stringify(array) === JSON.stringify(reverseArray);
};

// Do not edit below this line
module.exports = palindromes;
