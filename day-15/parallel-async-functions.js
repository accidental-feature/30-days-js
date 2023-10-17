/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;
        functions.length === 0 && resolve(results);
        functions.forEach((promise, index) => {
            promise()
            .then((result) => {
                results[index] = result;
                completed++;
                completed === functions.length && resolve(results)
            })
            .catch((error) => {
                reject(error)
            })
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */