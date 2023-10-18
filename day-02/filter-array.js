/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
	const tempArr = [];
	arr.forEach((item, i) => {
			if(fn(item, i)) tempArr.push(item);
	})
	return tempArr;
};