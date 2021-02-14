import { makeStyles } from '@material-ui/core/styles'

import Reveal from './Reveal'
import MiddleContent from './MiddleContent'
import ButtonsMain from './ButtonsMain'
import heroText from '../../assets/hero-text.png'
import { hasDateHappened } from '../../config/dateChange'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  tombRaiderImage: {
    height: '17vh',
    width: 'auto',
    marginTop: '-10vh',
  },
}))

export default function HeroMain() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
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
      <ButtonsMain className={classes.buttonSection} />
    </div>
  )
}
