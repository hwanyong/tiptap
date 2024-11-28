import '@testing-library/jest-dom'
import fs from 'fs'
import path from 'path'

describe('Next.js Configuration', () => {
  test('app directory exists', () => {
    expect(fs.existsSync(path.join(process.cwd(), 'src/app'))).toBe(true)
  })
  
  test('next.config.js exists', () => {
    expect(fs.existsSync(path.join(process.cwd(), 'next.config.mjs'))).toBe(true)
  })

  test('required app files exist', () => {
    expect(fs.existsSync(path.join(process.cwd(), 'src/app/layout.tsx'))).toBe(true)
    expect(fs.existsSync(path.join(process.cwd(), 'src/app/page.tsx'))).toBe(true)
  })
})