/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let tmpMax = 0;
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        const current = prices[i];
        for (let j = i + 1; j < prices.length; j++) {
            const next = prices[j];
            const diff = next - current;
            if (diff > 0 && diff > tmpMax) {
                tmpMax = diff;
            }
        }
        if (tmpMax > max) {
            max = tmpMax;
        }
    }
    // let current = prices[0];
    // let tmpMax = 0;
    // let max = 0;
    // for (let i = 1; i < prices.length; i++) {
    //     let next = prices[i];
    //     if (next > current) {
    //         tmpMax = tmpMax + next - current;
    //     } else {
    //         current = next;
    //         if (tmpMax > max) {
    //             max = tmpMax;
    //         }
    //         tmpMax = 0;
    //     }

    // }
    return max;
};

