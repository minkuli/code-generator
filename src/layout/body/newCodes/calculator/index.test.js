import { costCalculator } from './index'

it('calculating the cost', () => {
  expect(costCalculator(5, 12, true, 'Premium plan', 'eur', '€')).toBe(1045)
})

it('all zeroes', () => {
  expect(costCalculator(0, 0, false, 'Premium plan', 'usd', '$')).toBe(0)
})

it('negative number of devices', () => {
  expect(costCalculator(-1, 1, false, 'Standard plan', 'eur', '€')).toBe(-9)
})

it('string instead of number', () => {
  expect(costCalculator('five', 3, false, 'Standard plan', 'usd', '$')).toBe(
    165,
  )
})

it('string instead of number', () => {
  expect(costCalculator('5', 3, false, 'Standard plan', 'usd', '$')).toBe(165)
})
