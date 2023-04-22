let isAnagram = (function(string1, string2) {
    let first  = string1.toLowerCase();
    let second = string2.toLowerCase();

    first  = first.split("").sort().join("");
    second = second.split("").sort().join("");

    return first === second;

})("knee", "keen");

console.log(isAnagram);