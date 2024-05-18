//Task 1
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

module.exports.processArray = processArray;

// Task 2
function formatArrayStrings(strings, numbers) {
    const processedNumbers = processArray(numbers);
    return strings.map((str, index) => {
        return processedNumbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}


module.exports.formatArrayStrings = formatArrayStrings;