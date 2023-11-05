import Hero from '@app/components/Hero';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

test('Hero page renders correctly', () => {
  const component = render(<Hero />);

  expect(component).toBeInTheDocument();
  expect(screen.getByText('Rendered correctly')).toBeInTheDocument();
});
