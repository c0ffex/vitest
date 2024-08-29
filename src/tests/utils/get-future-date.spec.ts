import { expect, test } from "vitest"
import { getFutureDate } from "./get-future-date"

test('increases date with one year', () => {
  const date = new Date().getFullYear()
  expect(getFutureDate(`${date}-08-10`).getFullYear()).toEqual(date+1)
})