var findMedianSortedArrays = function(nums1, nums2) {
	let sortedArr = [];

	if(nums1.length >= 1 && nums2.length >= 1) {
		sortedArr = [...nums1, ...nums2];
		sortedArr = sortedArr.sort((a,b) => a - b);
	} else{
		if(nums1.length == 0){
			sortedArr = [...nums2];
		}
		else if(nums2.length == 0) {
			sortedArr = [...nums1];
		}
	}


	if(sortedArr.length%2 === 1){
		return sortedArr[(sortedArr.length - 1) / 2]
	} else{
		let mean = (sortedArr[(sortedArr.length / 2) - 1] + sortedArr[(sortedArr.length / 2)]) / 2;

		return mean;
	}
};