import renderer from 'react-test-renderer'
import FooterButtons from './FooterButtons'

it('FooterButtons matches snapshot', () => {
  const tree = renderer.create(<FooterButtons />).toJSON()
  expect(tree).toMatchSnapshot()
})
