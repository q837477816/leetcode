// leetcode 557

export default (str) => {
    if (!str) {
        return []
    }
    // 建立电话号码键盘映射
    const numberMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    // 把输入的字符串分割成数组
    const nums = str.split('')
    // 保存映射后的字符内容
    const codes = nums.map(num => numberMap[num])

    if (codes.length === 1) {
        return codes[0].split('')
    }

    const comb = (arr) => {
        // 临时变量用来保存前两个组合的结果
        let tmp = []
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                tmp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0, 2, tmp)
        if (arr.length > 1) {
            comb(arr)
        } else {
            return tmp
        }
        return arr[0]
    }

    return comb(codes)
}