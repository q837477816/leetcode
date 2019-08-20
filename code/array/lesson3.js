// leetcode 605

export default (arr, n) => {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            if (i === 0 && [0, undefined].includes(arr[i + 1])) {
                max++
                i++
            } else if (i === arr.length - 1 && arr[i - 1] === 0) {
                max++
                i++
            } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
                max++
                i++
            }
        }
    }
    return max >= n
}