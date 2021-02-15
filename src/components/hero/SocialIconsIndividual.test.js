import renderer from 'react-test-renderer'
import SocialIconIndividual from './SocialIconIndividual'

it('SocialIconIndividual matches snapshot', () => {
  const tree = renderer.create(<SocialIconIndividual />).toJSON()
  expect(tree).toMatchSnapshot()
})
