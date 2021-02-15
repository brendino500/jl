import renderer from 'react-test-renderer'
import Logos from './Logos'

it('Logos matches snapshot', () => {
  const tree = renderer.create(<Logos />).toJSON()
  expect(tree).toMatchSnapshot()
})
