import renderer from 'react-test-renderer'
import SocialIconIndividual from './SocialIconIndividual'

describe('social media icons individual snapshot test', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SocialIconIndividual />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
