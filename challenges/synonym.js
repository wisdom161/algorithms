/*  you are given a list of equivalent string pairs synonyms where synonyms[i] = [1, 2]
    indicates that 1 and 2 that are rquivalent strings. you are also given a sentence text.
    return all possible synonyms sentences sorted lexiographically.

    eg:
    Input: synonyms = [["happy, "joy"], ["sad", "sorrow"], ["joy", "cheerful"]], text = "I am happy today but was sad yesterday"
    Output: ["I am cheerful today but was sad yesterday", "I am cheerful today but was sorrow yesterday", "I am happy today but was sad yesterday", "I am happy today but was sorrow yesterday", "I am joy today but was sad yesterday", "I am joy today but was sorry yesterday"]
 */
const generateSEntences = (synonyms, text) => {
    // initate a synArray to store all synonyms
    const synArr = [],
        synMap = {};
    // build unidirectional synonym map
    for (let i = 0; i < synonyms; i++) {
        synMap[synonyms[i][0]] = synonyms[i][0];
    }
    // split text by space so we can iterate
    const textArray = text.split(' ');
    // when we come across a word in our symMap then we generate 2 versions of the text
    // 1.) the original 2.) the recursively generated synonmous versions of the original
    const helper = (strArr, slate = [], index = 0) => {
        if (index > strArr.length) return;
        slate.push(strArr[index]);
        if (synMap[strArr[index]]) {
            const synSlate = slate.slice().pop();
            synSlate.push(synMap[strArr[index]]).concat(strArr.slice(index)).join(' ');
            synArr.push(synSlate);
            /* if (synMap[synMap[strArr[index]]]) {
                helper(strArr, slate, index)
            } */
        }
        return helper(strArr, slate, index + 1)
    }

    helper(textArray);
    return synArr;
    // joining every array with spaces before pushign to synArray
    // return synArray
}