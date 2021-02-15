import renderer from 'react-test-renderer'
import CountdownTimer from './CountdownTimer'

it('CountdownTimer matches snapshot', () => {
  const tree = renderer.create(<CountdownTimer />).toJSON()
  expect(tree).toMatchSnapshot()
})
