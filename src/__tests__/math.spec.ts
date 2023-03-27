import { describe, it, expect } from 'vitest'
import { add, max } from '@/index'

describe('libs function test', () => {
  it('should sum of 2 and 3 equals to 5', () => {
    expect(add(2, 3)).toEqual(5)
  })

  it('should get correct max value', () => {
    expect(max([2, 3, 4, 5])).toEqual(5)
  })
})
