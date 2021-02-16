import SmallPrint from './SmallPrint'
import Logos from './Logos'
import FooterButtons from './FooterButtons'
import useStyles from '../../styles/footerStyles/FooterMainStyles'

export default function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Logos />
      <SmallPrint />
      <FooterButtons />
    </div>
  )
}
