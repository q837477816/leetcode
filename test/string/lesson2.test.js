import countBinarySubstrings from '../../code/string/lesson2'

test('countBinarySubstrings(00110011)', () => {
    expect(countBinarySubstrings('00110011')).toBe(6)
})

test('countBinarySubstrings(10101)', () => {
    expect(countBinarySubstrings('10101')).toBe(4)
})