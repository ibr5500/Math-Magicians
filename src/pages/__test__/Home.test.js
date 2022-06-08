import renderer from 'react-test-renderer';
import Home from '../Home';

describe('Test for the Home page', () => {
  it('Should render the home page', () => {
    const tree = renderer.create(<Home />);
    expect(tree).toMatchSnapshot();
  });
});