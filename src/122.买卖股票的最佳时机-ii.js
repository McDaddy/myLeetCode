/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let isEmpty = true;
  let sum = 0;
  let last = -1;
  for (let i = 0; i < prices.length; i++) {
    const current = prices[i];
    const next = prices[i + 1];
    if (isEmpty) {
      if (next > current) {
        isEmpty = false;
        last = current;
      }
    } else if (next > current) {
      sum += current - last;
      last = current;
    } else {
      sum += current - last;
      isEmpty = true;
    }
  }
  return sum;
};

