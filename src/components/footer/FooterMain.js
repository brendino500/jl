import { makeStyles } from '@material-ui/core/styles'

import SmallPrint from './SmallPrint'
import Logos from './Logos'
import FooterButtons from './FooterButtons'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '40vh',
    backgroundColor: 'white',
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