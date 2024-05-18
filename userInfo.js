const {  formatArrayStrings } = require('./arrayManipulation');

// Task 3: 
function createUserProfiles(names, modifiedNames) {
    const modifiedNames = formatArrayStrings(names, numbers);
    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

module.exports.createUserProfiles = createUserProfiles;