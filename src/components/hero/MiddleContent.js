import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'

import CountdownTimer from './CountdownTimer'
import divider from '../../assets/divider.png'
import teaserButton from '../../assets/watch-teaser-button.png'
import { dateString, dateValidation } from '../../config/dateChange'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.between('md', 'lg')]: {
      // height: '10vh',
    },
  },
  timerLayoutMain: {
    display: 'flex',
  },
  divider: {
    width: 500,
  },
  revealText: {
    color: '#C44027',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5vw',
    marginTop: '2vh',
    fontFamily: 'Sora',
  },
  teaserButton: {
    width: 210,
  },
}))

export default function MiddleContent() {
  const classes = useStyles()
  dateValidation()

  return (
    <div className={classes.container}>
      <CountdownTimer />
      <img src={divider} alt="divider" className={classes.divider} />
      <Typography className={classes.revealText}>
        Reveal Event {dateString}
      </Typography>

      <Button
        href="https://square-enix-games.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={teaserButton}
          alt="watch teaser button"
          className={classes.teaserButton}
        />
      </Button>
    </div>
  )
}
