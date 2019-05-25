/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const numArray = s.split('');
    const mapping = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    const specialMapping = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900,
    }

    let sum = 0;

    for (let i = 0; i < numArray.length; i++) {
        
        const current = numArray[i];
        const next = numArray[i + 1];
        if (next && specialMapping[`${current}${next}`]) {
            
            sum += specialMapping[`${current}${next}`];
            i += 1;
        } else {
            sum += mapping[current];
        }
    }

    return sum;
};

