/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    if (numRows === 1) {
        return [[1]];
    }
    if (numRows === 2) {
        return [
            [1],
            [1, 1],
        ];
    }
    const result = [
        [1],
        [1, 1],
    ]
    for (let i = 2; i < numRows; i++) {
        const lastRow = result[i - 1];
        const tmp = [1];
        for (let j = 1; j < i; j++) {
            tmp.push(lastRow[j] + lastRow[j-1]);
        }
        tmp.push(1);
        result.push(tmp);
    }
    return result;
};

