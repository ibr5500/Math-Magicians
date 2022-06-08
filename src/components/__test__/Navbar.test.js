import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';


describe('Testing the Navbar', () => {
  it('Rendering Navbar components ', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    screen.debug();
  });
});