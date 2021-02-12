import renderer from 'react-test-renderer'
import SocialIconsLayout from './SocialIconsLayout'

describe('social media icons layout snapshot test', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SocialIconsLayout />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
