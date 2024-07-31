function findClosest(array, target) {
    let start = 0
    let end = array.length - 1
    let minDifference = Infinity
    let closestIndex = null
    while (start <= end) {
        let mid = start + Math.floor((end-start)/2)
        const diff = Math.abs(target - array[mid])
            if (diff < minDifference) {
                minDifference = diff
                closestIndex = mid
            }
        
        if (target < array[mid]) end = mid - 1
        else if (target > array[mid]) start = mid + 1
        else return mid
    }

    return closestIndex
}

console.log(findClosest([2,3,5,8,9,11], 7))


/* 

Given a sorted array A that has been rotated in a cycle, find the smallest element of the array in O(log(n)) time. For example,

[1,2,4,5,7,8] rotated by 3 gives us A = [5,7,8,1,2,4] and the smallest number is 1.
[1,2,4,5,7,8] rotated by 1 gives us A = [8,1,2,4,5,7] and the smallest number is 1.

[5,7,8,1,2,4]
    s=3e=4
*/

function findSmallestValueCyclicalArray(array) {
    const pivot = array.length - 1
    let start = 0
    let end = array.length - 1
    while (start < end) {
        let mid = start + Math.floor((end - start)/2)
        if (array[mid] > pivot) start = mid + 1
        else {
            if (array[mid] < array[mid - 1]) return array[mid]
            end = mid - 1
        } 
    }
    return array[start]
}

console.log(findSmallestValueCyclicalArray([1,2,3,4,5]))

