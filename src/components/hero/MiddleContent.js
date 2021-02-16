import { Typography, Button } from '@material-ui/core'

import CountdownTimer from './CountdownTimer'
import divider from '../../assets/divider.png'
import teaserButton from '../../assets/watch-teaser-button.png'
import { dateString, dateValidation } from '../../config/dateChange'
import useStyles from '../../styles/heroStyles/MiddleContentStyles'

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
          className={`${classes.teaserButton} hvr-grow`}
        />
      </Button>
    </div>
  )
}
