import { makeStyles } from '@material-ui/core/styles'

import xbox from '../../assets/xbox-logo.png'
import ps4 from '../../assets/ps4-logo.png'
import steam from '../../assets/steam-logo.png'
import pcsoftware from '../../assets/pc-software-logo.png'
import rating from '../../assets/age-rating-logo.png'
import selogo from '../../assets/se-logo-black.png'

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    display: 'flex',
  },
  logos: {
    height: '3em',
    marginLeft: '2em',
  },
  seLogo: {
    height: '2em',
    width: 'auto',
  },
}))

export default function Logos() {
  const classes = useStyles()
  const logos = [rating, xbox, ps4, steam, pcsoftware]

  return (
    <div className={classes.logoContainer}>
      <div>
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="logo" className={classes.logos} />
        ))}
      </div>
      <div>
        <img src={selogo} alt="se logo" className={classes.seLogo} />
      </div>
    </div>
  )
}
