import renderer from 'react-test-renderer'
import MiddleContent from './MiddleContent'

it('MiddleContent matches snapshot', () => {
  const tree = renderer.create(<MiddleContent />).toJSON()
  expect(tree).toMatchSnapshot()
})
