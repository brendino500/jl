import { makeStyles } from '@material-ui/core/styles'

import CountdownTimer from './CountdownTimer'
import ButtonsMain from './ButtonsMain'
import heroText from '../../assets/hero-text.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tombRaiderImage: {
    height: '8em',
    width: 'auto',
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
      <CountdownTimer />
      <ButtonsMain />
    </div>
  )
}
