/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        const num = i + 1;
        if (num % 3 === 0) {
            if (num % 5 === 0) {
                result[i] = 'FizzBuzz';
            } else {
                result[i] = 'Fizz';
            }
        } else if (num % 5 === 0) {
            result[i] = 'Buzz';
        } else {
            result[i] = `${num}`;
        }
    }
    return result;
};

