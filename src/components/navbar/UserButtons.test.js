import renderer from 'react-test-renderer'
import UserButtons from './UserButtons'

it('renders correctly', () => {
  const tree = renderer.create(<UserButtons />).toJSON()
  expect(tree).toMatchSnapshot()
})
