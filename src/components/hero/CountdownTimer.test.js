import renderer from 'react-test-renderer'
import CountdownTimer from './CountdownTimer'

describe('renders when timer is counting', () => {
  const tree = renderer.create(<CountdownTimer />).toJSON()
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot()
  })

  it('numbers decrement over time to the final date', () => {
    expect(tree).toMatchSnapshot()
  })
})
