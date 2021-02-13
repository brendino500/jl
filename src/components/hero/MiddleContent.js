import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'

import CountdownTimer from './CountdownTimer'
import divider from '../../assets/divider.png'
import { dateString, dateValidation } from '../../config/dateChange'

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

export default function MiddleContent() {
  const classes = useStyles()
  dateValidation()

  return (
    <div className={classes.container}>
      <CountdownTimer />
      <img src={divider} alt="divider" className={classes.divider} />
      <Typography>Reveal Event {dateString}</Typography>
      <Button
        href="https://square-enix-games.com/"
        target="_blank"
        rel="noreferrer"
      >
        Watch Teaser
      </Button>
    </div>
  )
}
