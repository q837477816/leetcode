import canPlaceFlowers from '../../code/array/lesson3'

test('canPlaceFlowers:[1,0,0,0,1], 1', () => {
    expect(canPlaceFlowers([1,0,0,0,1], 1)).toBe(true)
})

test('canPlaceFlowers:[1,0,0,0,1,0,0], 2', () => {
    expect(canPlaceFlowers([1,0,0,0,1,0,0], 2)).toBe(true)
})