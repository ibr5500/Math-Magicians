import renderer from 'react-test-renderer';
import Quote from '../Quote';

describe('Test for the Quote page', () => {
    it('Should render the Quote page', () => {
      const tree = renderer.create(<Quote />);
      expect(tree).toMatchSnapshot();
    });
});