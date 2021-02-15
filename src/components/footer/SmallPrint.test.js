import renderer from 'react-test-renderer'
import SmallPrint from './SmallPrint'

it('SmallPrint matches snapshot', () => {
  const tree = renderer.create(<SmallPrint />).toJSON()
  expect(tree).toMatchSnapshot()
})
