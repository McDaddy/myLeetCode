/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let max = Math.max(x,y);
    let min = Math.min(x,y);

    let count = 0;

    while (max) {
        const lmax = max % 2;
        let lmin = 0;
        
        max = Math.floor(max / 2);
        if (min) {
            lmin = min % 2;
            min = Math.floor(min / 2);
        }
        // console.log(min, lmin);
        count += lmax ^ lmin;
    }
    return count;
};

