/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return (n) => {
        return findBadVersion(1, n, isBadVersion);
    };
};

const findBadVersion = (low, high, isBadVersion) => {
    if (low === high) {
        return high;
    }
    const middle = Math.floor((low + high) / 2);
    
    if (isBadVersion(middle)) {
        return findBadVersion(low, middle, isBadVersion)
    } else {
        return findBadVersion(middle + 1, high, isBadVersion)
    }
}

