/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let joined = {}
    arr2.forEach((element) => {
        joined[element.id] = element;
    });

    arr1.forEach((element) => {
       let elements = joined[element.id]
        if(elements){
            joined[elements.id] = {...element, ...elements}
        }
        else{
           joined[element.id] = element;
        }
    });

    return Object.values(joined)
};