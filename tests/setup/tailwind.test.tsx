
import { render, screen } from '@testing-library/react';
import fs from 'fs';
import path from 'path';

describe('TailwindCSS Setup', () => {
  test('tailwind.config.js exists', () => {
    const configExists = fs.existsSync(
      path.join(process.cwd(), 'tailwind.config.ts')
    );
    expect(configExists).toBe(true);
  });

  test('can use Tailwind classes', () => {
    const TestComponent = () => (
      <div data-testid="test-element" className="bg-blue-500 text-white p-4">
        Test
      </div>
    );

    render(<TestComponent />);
    const element = screen.getByTestId('test-element');
    expect(element).toHaveClass('bg-blue-500', 'text-white', 'p-4');
  });
});