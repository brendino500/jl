import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
  FaInstagramSquare,
} from 'react-icons/fa'
import { makeStyles } from '@material-ui/core/styles'

import SocialIconIndividual from './SocialIconIndividual'

const icons = [
  { icon: <FaFacebookF />, url: 'https://www.facebook.com/SquareEnix' },
  { icon: <FaTwitter />, url: 'https://twitter.com/SquareEnix' },
  { icon: <FaGooglePlusG />, url: 'https://square-enix-games.com/' },
  { icon: <FaYoutube />, url: 'https://www.youtube.com/user/UKSquareEnix' },
  { icon: <FaInstagramSquare />, url: 'https://www.instagram.com/squareenix/' },
]

const useStyles = makeStyles((theme) => ({
  iconGrid: {
    maxWidth: 210,
  },
}))

export default function SocialIconsLayout() {
  const classes = useStyles()
  return (
    <div className={classes.iconGrid}>
      {icons.map((icon, index, url) => (
        <SocialIconIndividual key={index} icon={icon.icon} url={icon.url} />
      ))}
    </div>
  )
}
