/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n === 0) return arr.slice();

    return arr.reduce((accur, current) => {
        if(Array.isArray(current)) {
            accur.push(...flat(current, n - 1));
        } else {
            accur.push(current);
        }
        return accur;
    }, [])
};