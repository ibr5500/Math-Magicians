import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Quote from '../Quote';

describe('Test for the Quote page', () => {
    it('Renders William Paul Thurston', () => {
      render(<Quote />);
      expect(screen.getByText(/William Paul Thurston/)).toBeInTheDocument();
    });
});