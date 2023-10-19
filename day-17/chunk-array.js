/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let newArr = [];
    for(let index = 0; index < arr.length; index++) {
        if(!newArr[Math.floor(index/size)]) {
            newArr.push([arr[index]])
        } else {
            newArr[Math.floor(index/size)].push(arr[index])
        }
    }
    return newArr;
};
