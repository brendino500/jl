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
    flexDirection: 'column',
  },
  logoGrid: {
    marginTop: '3%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.between('xs', 'sm')]: {
      flexWrap: 'wrap',
    },
  },
  logos: {
    height: '3em',
    marginLeft: '2em',
  },
  seLogo: {
    height: '2em',
    width: 'auto',
    marginTop: '2em',
    marginBottom: '1em',
    [theme.breakpoints.between('xs', 'sm')]: {
      height: 20,
    },
  },
  seLogoContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export default function Logos() {
  const classes = useStyles()

  const logos = [
    { image: rating, name: 'rating-logo' },
    { image: xbox, name: 'xbox-logo' },
    { image: ps4, name: 'ps4-logo' },
    { image: steam, name: 'steam-logo' },
    { image: pcsoftware, name: 'pcsoftware-logo' },
  ]
  return (
    <div className={classes.logoContainer}>
      <div className={classes.logoGrid}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.image}
            alt="logo"
            className={`${logo.name}`}
          />
        ))}
      </div>
      <div className={classes.seLogoContainer}>
        <img src={selogo} alt="se logo" className={classes.seLogo} />
      </div>
    </div>
  )
}
