import { render, screen } from '@testing-library/react'
import { NextUIProvider, Button, Card } from '@nextui-org/react'

describe('NextUI Integration', () => {
  test('NextUI components render correctly', () => {
    render(
      <NextUIProvider>
        <Button>Test Button</Button>
        <Card>
          <p>Test Card</p>
        </Card>
      </NextUIProvider>
    )
  })
})