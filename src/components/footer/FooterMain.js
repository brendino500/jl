import { makeStyles } from '@material-ui/core/styles'

import SmallPrint from './SmallPrint'
import Logos from './Logos'
import FooterButtons from './FooterButtons'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 400,
    backgroundColor: '#ffffff',
    margin: '-0.5em',
    [theme.breakpoints.between('sm', 'md')]: {
      height: '80vh',
    },
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
