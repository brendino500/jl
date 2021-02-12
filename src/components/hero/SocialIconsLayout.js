import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
  FaInstagramSquare,
} from 'react-icons/fa'

import SocialIconIndividual from './SocialIconIndividual'

const icons = [
  <FaFacebookF />,
  <FaTwitter />,
  <FaGooglePlusG />,
  <FaYoutube />,
  <FaInstagramSquare />,
]

export default function SocialIconsLayout() {
  return (
    <div>
      {icons.map((icon, index) => (
        <SocialIconIndividual key={index} icon={icon} />
      ))}
    </div>
  )
}
