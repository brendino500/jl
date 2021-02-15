import renderer from 'react-test-renderer'
import HeroMain from './HeroMain'

it('HeroMain matches snapshot', () => {
  const tree = renderer.create(<HeroMain />).toJSON()
  expect(tree).toMatchSnapshot()
})
