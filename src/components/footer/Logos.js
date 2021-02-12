import { makeStyles } from '@material-ui/core/styles'

import xbox from '../../assets/xbox-logo.png'
import ps4 from '../../assets/ps4-logo.png'
import steam from '../../assets/steam-logo.png'
import pcsoftware from '../../assets/pc-software-logo.png'
import rating from '../../assets/age-rating-logo.png'

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    display: 'flex',
  },
  logos: {
    height: '3em',
    marginLeft: '2em',
  },
}))

export default function Logos() {
  const classes = useStyles()
  const logos = [rating, xbox, ps4, steam, pcsoftware]

  return (
    <div className={classes.logoContainer}>
      {logos.map((logo, index) => (
        <img key={index} src={logo} alt="logo" className={classes.logos} />
      ))}
    </div>
  )
}
