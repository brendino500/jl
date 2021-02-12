import { makeStyles } from '@material-ui/core/styles'

import CountdownTimer from './CountdownTimer'
import divider from '../../assets/divider.png'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  timerLayoutMain: {
    display: 'flex',
  },
  divider: {
    width: 'auto',
  },
}))

export default function TimerTeaserMiddleMain() {
  const classes = useStyles()
  return (
    <div>
      <CountdownTimer />
      <img src={divider} alt="divider" className={classes.divider} />
    </div>
  )
}
