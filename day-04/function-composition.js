/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	// Returns x if no functions are passed in
	if(functions.length === 0) {
			return function(x) {
					return x
			}
	} else {
		// Helps to combine the functions passed in
			function helper(outerFunc, innerFunc) {
				// The outer function runs last using the result of the inner function
					return function(x) {
							return outerFunc(innerFunc(x))
					}
			}
			// Reduces the functions array to a single value by running the array through the helper function
			return functions.reduce(helper)
	}
};

/**
* const fn = compose([x => x + 1, x => 2 * x])
* fn(4) // 9
*/