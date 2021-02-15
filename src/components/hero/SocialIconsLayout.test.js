import renderer from 'react-test-renderer'
import SocialIconsLayout from './SocialIconsLayout'

it('SocialIconsLayout matches snapshot', () => {
  const tree = renderer.create(<SocialIconsLayout />).toJSON()
  expect(tree).toMatchSnapshot()
})
