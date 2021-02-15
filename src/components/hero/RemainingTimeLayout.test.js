import renderer from 'react-test-renderer'
import RemainingTimeLayout from './RemainingTimeLayout'

it('RemainingTimeLayout matches snapshot', () => {
  const tree = renderer.create(<RemainingTimeLayout />).toJSON()
  expect(tree).toMatchSnapshot()
})
