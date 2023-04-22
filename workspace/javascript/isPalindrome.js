let isPalindrome = (function(str) {
    const reversed = str.split('').reverse().join('');
    if (str === reversed) {
        return true;
    }
    return false;
})("mute");

console.log(isPalindrome);