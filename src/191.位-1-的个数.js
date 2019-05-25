/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let tmp = n;
    let count = 0;
    
    while(tmp){
        const mod = tmp % 2;
        tmp = Math.floor(tmp / 2);
        mod === 1 && count++;
    }
    return count;
};

