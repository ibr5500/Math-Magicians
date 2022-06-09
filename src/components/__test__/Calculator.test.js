import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('Test for the Calculator component', () => {
    it('Should render the Calculator', () => {
      const tree = renderer.create(<Calculator />);
      expect(tree).toMatchSnapshot();
    });
});