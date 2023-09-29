function firstNonRepeatedChar(str) {
 const charCount = {};

    // Iterate through the string to count character occurrences
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterate through the string again to find the first non-repeated character
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}
console.log(firstNonRepeatedChar('aabbcdd')); 
console.log(firstNonRepeatedChar('aabbcc'));
