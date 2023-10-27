/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(obj === null || typeof obj !== "object") return obj;
    if(Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);

    const compacted = {};
    for(const item in obj) {
        const val = compactObject(obj[item]);
        if(Boolean(val)) compacted[item] = val;
    }
    return compacted;
};