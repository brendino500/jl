import { makeStyles } from '@material-ui/core/styles'

import SmallPrint from './SmallPrint'
import Logos from './Logos'
import FooterButtons from './FooterButtons'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '58vh',
    backgroundColor: '#3eab8c',
    margin: '-0.5em',
  },
}))

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
