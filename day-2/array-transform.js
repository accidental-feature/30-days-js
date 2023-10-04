/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
	const tempArr = [];
	arr.forEach((item, i) => tempArr.push(fn(item, i)))
	return tempArr;
};