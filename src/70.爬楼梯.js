/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */
/**
 * @param {number} n
 * @return {number}
 */
const cache = {1: 1, 2:2};
var climbStairs = function(n) {
    return checkPossible(n, 2);
};

const checkPossible = (n, lastCount) => {
    if (cache[n]) {
        return cache[n];
    }
    const n2 = checkPossible(n - 2,lastCount);
    cache[n-2] = n2;
    const n1 = checkPossible(n - 1,lastCount);
    cache[n-1] = n1;
    return n1 + n2;
}

