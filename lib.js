const square = (n) => n * n;
const fahrenheit = (celsius) => celsius * 1.8 + 32;
const rectangleArea = (a, b) => a * b;
const isPalindrome = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i].toLowerCase() !== str[str.length - i - 1].toLowerCase()) {
            return false;
        }
    }

    return true;
};

module.exports = {
    square,
    fahrenheit,
    rectangleArea,
    isPalindrome
};
