import { makeStyles } from '@material-ui/core/styles'

import Reveal from './Reveal'
import MiddleContent from './MiddleContent'
import ButtonsMain from './ButtonsMain'
import heroText from '../../assets/hero-text.png'
import { hasDateHappened } from '../../config/dateChange'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '125vh',
    [theme.breakpoints.between('sm', 'md')]: {
      height: '130vh',
    },
  },
  tombRaiderImage: {
    position: 'absolute',
    height: '17vh',
    top: '7vh',
    [theme.breakpoints.between('xs', 'sm')]: {
      marginTop: 50,
      width: 400,
      height: 'auto',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      marginTop: 10,
      width: 500,
      height: 'auto',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      marginTop: 10,
    },
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
