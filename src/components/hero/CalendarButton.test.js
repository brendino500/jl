import renderer from 'react-test-renderer'
import CalendarButton from './CalendarButton'

it('ButtonsMain matches snapshot', () => {
  const tree = renderer.create(<CalendarButton />).toJSON()
  expect(tree).toMatchSnapshot()
})
