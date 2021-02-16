import Fade from 'react-reveal/Fade'

import Reveal from './Reveal'
import MiddleContent from './MiddleContent'
import ButtonsMain from './ButtonsMain'
import heroText from '../../assets/hero-text.png'
import { hasDateHappened } from '../../config/dateChange'
import useStyles from '../../styles/heroStyles/HeroMainStyles'

export default function HeroMain() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Fade big>
        <img
          src={heroText}
          alt="Tomb Raider text"
          className={classes.tombRaiderImage}
        />

        {hasDateHappened() ? (
          <Reveal className={classes.middleSection} />
        ) : (
          <MiddleContent className={classes.middleSection} />
        )}
      </Fade>

      <ButtonsMain className={classes.buttonSection} />
    </div>
  )
}
