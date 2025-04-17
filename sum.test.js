import{sum, sub} from './sum.js'

test('суммируем 2 и 3', () => {

    expect(sum(2,3)).toBe(5)
    expect(sum(12,8,1)).toBe(21)
})

test('вычитаем из 10 число 3', () => {

    expect(sub(10,7)).toBe(3)
})



