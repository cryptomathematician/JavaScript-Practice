//Task 1
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

module.exports.processArray = processArray;

