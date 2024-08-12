module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let bracketMap = new Map();
    let openBrackets = new Set();
    let closeBrackets = new Set();


    for (let [open, close] of bracketsConfig) {
        bracketMap.set(close, open);
        openBrackets.add(open);
        closeBrackets.add(close);
    }

    for (let char of str) {
        if (openBrackets.has(char) && (!closeBrackets.has(char) || stack[stack.length - 1] !== char)) {

            stack.push(char);
        } else if (closeBrackets.has(char)) {
            // If it's a closing bracket
            if (stack.length === 0 || stack.pop() !== bracketMap.get(char)) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
