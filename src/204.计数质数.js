/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n === 1 || n === 2) {
        return 0;
    }
    let count = 0;
    const total = [false, false];
    for (let i = 2; i < n; i++) {
        total[i] = true;
    }
    for (let i = 2; i < n; i++) {
        if (total[i]) {
            for (let j = i * i; j < n; j += i) {
                count++;
                total[j] = false;
            }
        }
    }
    console.log(count);
    
    return total.filter(x => x).length;

    // 时间超时
    // if (n === 1 || n === 2) {
    //     return 0;
    // }
    // const results = [];
    // for (let i = 2; i < n; i++) {
    //     const isNotVaild = results.some(x => {
    //         return i % x === 0});
    //     if (!isNotVaild) {
    //         results.push(i);
    //     }
    // }
    
    // return results.length;
};

