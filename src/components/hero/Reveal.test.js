import renderer from 'react-test-renderer'
import Reveal from './Reveal'

describe('reveal component renders when timer finishes', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Reveal />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
