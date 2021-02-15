import renderer from 'react-test-renderer'
import FooterMain from './FooterMain'

it('FooterMain matches snapshot', () => {
  const tree = renderer.create(<FooterMain />).toJSON()
  expect(tree).toMatchSnapshot()
})
