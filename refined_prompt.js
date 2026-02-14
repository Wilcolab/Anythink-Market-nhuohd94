/**
 * Converts a string to camelCase format
 * @param {string} str - The string to convert
 * @returns {string} The camelCase version of the string
 * @throws {Error} If input is not a valid string
 */
function camelCase(str) {
    // Handle null and undefined
    if (str === null || str === undefined) {
        throw new Error('Input cannot be null or undefined');
    }

    // Check if input is a string
    if (typeof str !== 'string') {
        throw new Error(`Expected a string, but received ${typeof str}`);
    }

    // Check if string is empty
    if (str.trim().length === 0) {
        throw new Error('Input string cannot be empty');
    }

    // Replace spaces, hyphens, and underscores with spaces for splitting
    const words = str
        .replace(/[\s\-_]+/g, ' ')
        .trim()
        .split(' ')
        .filter(word => word.length > 0);

    if (words.length === 0) {
        throw new Error('Input string must contain at least one valid word');
    }

    // Convert first word to lowercase, rest to capitalize first letter
    return words
        .map((word, index) => {
            const lowerWord = word.toLowerCase();
            if (index === 0) {
                return lowerWord;
            }
            return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join('');
}

// Test cases
console.log(camelCase('first name'));           // firstName
console.log(camelCase('user_id'));              // userId
console.log(camelCase('SCREEN_NAME'));          // screenName
console.log(camelCase('mobile-number'));        // mobileNumber

// Error handling
try {
    camelCase(null);
} catch (e) {
    console.error(e.message);                     // Input cannot be null or undefined
}

try {
    camelCase(123);
} catch (e) {
    console.error(e.message);                     // Expected a string, but received number
}

try {
    camelCase('');
} catch (e) {
    console.error(e.message);                     // Input string cannot be empty
}
/**
 * Converts a string to dot.case format
 * @param {string} str - The string to convert
 * @returns {string} The dot.case version of the string
 * @throws {Error} If input is null or undefined
 * @throws {Error} If input is not a string type
 * @throws {Error} If input string is empty or contains only whitespace
 * @throws {Error} If input string contains no valid words after processing
 * @example
 * dotCase('first name');           // Returns: 'first.name'
 * dotCase('user_id');              // Returns: 'user.id'
 * dotCase('SCREEN_NAME');          // Returns: 'screen.name'
 * dotCase('mobile-number');        // Returns: 'mobile.number'
 * @description
 * Transforms a string into dot.case format by:
 * - Normalizing separators (spaces, hyphens, underscores)
 * - Converting all words to lowercase
 * - Joining words with dots (.)
 * Supports multiple separator styles and mixed case inputs
 *
 * @throws {Error} If input is not a valid string
 */
function dotCase(str) {
    // Handle null and undefined
    if (str === null || str === undefined) {
        throw new Error('Input cannot be null or undefined');
    }

    // Check if input is a string
    if (typeof str !== 'string') {
        throw new Error(`Expected a string, but received ${typeof str}`);
    }

    // Check if string is empty
    if (str.trim().length === 0) {
        throw new Error('Input string cannot be empty');
    }

    // Replace spaces, hyphens, and underscores with spaces for splitting
    const words = str
        .replace(/[\s\-_]+/g, ' ')
        .trim()
        .split(' ')
        .filter(word => word.length > 0);

    if (words.length === 0) {
        throw new Error('Input string must contain at least one valid word');
    }

    // Convert all words to lowercase and join with dots
    return words
        .map(word => word.toLowerCase())
        .join('.');
}

// Test cases
console.log(dotCase('first name'));           // first.name
console.log(dotCase('user_id'));              // user.id
console.log(dotCase('SCREEN_NAME'));          // screen.name
console.log(dotCase('mobile-number'));        // mobile.number
