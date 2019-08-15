// leetcode 557

export default (str) => {
    return str.split(' ').map(item => item.split('').reverse().join('')).join(' ')
}