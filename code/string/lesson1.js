// leetcode 557

// 解法1
// export default (str) => {
//     const arr = str.split(' ')
//     const result = arr.map(item => {
//         return item.split('').reverse().join('')
//     })
//     return result.join(' ')
// }

//解法二 （去除中间变量）
// export default (str) => {
//     return str.split(' ').map(item => item.split('').reverse().join('')).join(' ')
// }

// 解法三 （split方法支持传入正则）
// export default (str) => {
//     return str.split(/\s/g).map(item => item.split('').reverse().join('')).join(' ')
// }

// 解法四 （使用正则匹配出所有的单词)
export default (str) => {
    return str.match(/[\w']+/g).map(item => item.split('').reverse().join('')).join(' ')
}