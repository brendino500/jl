import { Button } from '@material-ui/core'

import CalendarButton from './CalendarButton'
import newsLetterButton from '../../assets/newsletter-button.png'
import SocialIconsLayout from './SocialIconsLayout'
import useStyles from '../../styles/heroStyles/ButtonsMainStyles'

export default function ButtonsMain() {
  const classes = useStyles()

  return (
    <div className={classes.buttonSection}>
      <CalendarButton />

      <Button
        href="https://square-enix-games.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={newsLetterButton}
          alt="newsletter sign up"
          className={`${classes.button} hvr-grow`}
        />
      </Button>
      <div className={classes.socialIconGrid}>
        <SocialIconsLayout />
      </div>
    </div>
  )
}
