/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pairs = {
        '}' : '{',
        ']' : '[',
        ')' : '(',
    }

    const stack = [];
    const array = s.split('');
    if (array.length === 0) {
        return true;
    }

    if (array.length === 1) {
        return false;
    }

    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        const left = pairs[current];
        if (left) {
          if (stack.length === 0 || stack[stack.length - 1] !== left) {
              return false;
          }
          stack.pop();
        } else {
            stack.push(current);
        }
        // console.log(stack);
        
    }
    return stack.length === 0 ? true : false;
};

