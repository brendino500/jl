import renderer from 'react-test-renderer'
import ButtonsMain from './ButtonsMain'

it('ButtonsMain matches snapshot', () => {
  const tree = renderer.create(<ButtonsMain />).toJSON()
  expect(tree).toMatchSnapshot()
})
