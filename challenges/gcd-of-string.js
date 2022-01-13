const gcdOfStrings = (string1, string2) => {
    // check to see if string1.substring(string2.length) === string2, then recursive subtract
    // if string1.substring(string2.length) != string2, return ""
    // the remainder is the GCD

    if (string1 === '') return string2;
    if (string2 === '') return string1;

    if (string1.length < string2.length) return gcdOfStrings(string2, string1);

    const string1Sub = string1.substring(0, string2.length);

    if (string1Sub !== string2) return "";

    return gcdOfStrings(string1.substring(string2.length), string2)

}

console.log(gcdOfStrings('ABCABC', 'ABC'))
// input: str1 = "ABCABC", str2 = "ABC"
// output = "ABC"