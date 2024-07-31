//regular binary search - find target element - return index
// [1,3,5,6,9,10,13,16,18,21]  

function binarySearch(array, target) {
    let start = 0
    let end = array.length - 1
    while (start <= end) {
        let mid = start + Math.floor((end - start)/2)
        if (target < array[mid]) end = mid - 1
        else if (target > array[mid]) start = mid + 1
        else return mid
    }
    return null
}

console.log(binarySearch([1,3,5,6,9,10,13,16,18,21], 3))


/*

Given a sorted array that can contain duplicates, find the first occurrence of a target element T.

For example, if A = [2,3,4,4,5,6] and T = 4, return index 2.

*/

function bsWithDuplicates(array, target) {
    let start = 0
    let end = array.length - 1
    while (start <= end) {
        let mid = start + Math.floor((end - start)/2)
        if (target < array[mid] || (target === array[mid] && target === array[mid - 1])) end = mid - 1
        else if (target > array[mid]) start = mid + 1
        else return mid 
    }
    return null
}

console.log(bsWithDuplicates([2,3,4,4,5,5,5,5,5,6], 5))

/*
Given a sorted array A and a target T, find the target.
If the target is not in the array, find the number closest to the target. 
For example, if A = [2,3,5,8,9,11] and T = 7, return index of 8, i.e. return 3.

*/

function findClosestToTarget(array, target) {
    let start = 0
    let end = array.length - 1
    let closestIndex = null
    let closestAmount = Infinity
    while (start <= end) {
        let mid = start + Math.floor((end - start)/2)
        let currentDistance = Math.abs(array[mid] - target)
            if (currentDistance < closestAmount) {
                closestIndex = mid
                closestAmount = currentDistance
            }  
        if (target === array[mid]) return mid
        if (target < array[mid]) end = mid - 1
        else start = mid + 1
    }
    return closestIndex
}

console.log(findClosestToTarget([2,3,5,8,9,12], 16))