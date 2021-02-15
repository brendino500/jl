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
      height: 350,
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      height: 300,
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
