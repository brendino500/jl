import renderer from 'react-test-renderer'
import Navbar from './Navbar'

describe('navbar snapshot test', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Navbar />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
