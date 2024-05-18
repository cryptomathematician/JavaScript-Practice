# Student ID : 11288689


## Task 1: processArray

The processArray function takes an array of numbers (arr) and processes each number based on whether it is even or odd:

If the number is even, it is squared (multiplied by itself).
If the number is odd, it is tripled (multiplied by 3).


## Task 2: formatArrayStrings

Explanation:
The formatArrayStrings function takes two arrays: strings (an array of strings) and numbers (an array of numbers). It first processes the numbers array using the processArray function from Task 1 to get a new array of processed numbers. It then maps over the strings array and:

Converts each string to uppercase if the corresponding processed number is even.
Converts each string to lowercase if the corresponding processed number is odd.

## Task 3: createUserProfiles

The createUserProfiles function takes two arrays: names (an array of names) and numbers (an array of numbers). It uses the formatArrayStrings function from Task 2 to get an array of modified names. It then maps over the names array to create an array of user profile objects, where each object contains:

The original name (originalName).
The modified name (modifiedName).
A unique id which is the index of the name in the array plus one.

