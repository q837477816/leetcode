
// leetcode 914
export default (arr) => {
    if (arr.length <= 1) {
        return false
    }
    arr.sort((a, b) => a - b)
    let min = Number.MAX_SAFE_INTEGER
    let dst = []
    let tmp = []
    for (let i = 0; i < arr.length; i++) {
        if (!tmp.length) {
            tmp.push(arr[i])
        } else {
            if (arr[i] === tmp[0]) {
                tmp.push(arr[i])
            } else {
                if (min > tmp.length) {
                    min = tmp.length
                }
                dst.push([...tmp])
                tmp.length = 0
                tmp.push(arr[i])
            }
        }
        if (i === arr.length - 1) {
            if (min > tmp.length) {
                min = tmp.length
            }
            dst.push([...tmp])
        }
    }
    return dst.every(item => item.length >= 2 && item.length % min === 0)
}