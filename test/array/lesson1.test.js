import letterCombinations from '../../code/array/lesson1'

test('letterCombinations:空字符串', () => {
    expect(letterCombinations('')).toEqual([])
})

test('letterCombinations:2', () => {
    expect(letterCombinations('2')).toEqual(['a', 'b', 'c'])
})

test('letterCombinations:23', () => {
    expect(letterCombinations('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})

test('letterCombinations:234', () => {
    expect(letterCombinations('234')).toEqual(['adg','adh','adi','aeg','aeh','aei','afg','afh','afi','bdg','bdh','bdi','beg','beh','bei','bfg','bfh','bfi','cdg','cdh','cdi','ceg','ceh','cei','cfg','cfh','cfi'])
})