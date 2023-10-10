/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
	try {
			const num1 = await promise1;
			const num2 = await promise2;
			return num1 + num2
	} catch(e) {}
};


addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 .then(console.log); // 4