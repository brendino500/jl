import { makeStyles } from '@material-ui/core/styles'

import SmallPrint from './SmallPrint'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '60vh',
    backgroundColor: 'white',
    margin: '-0.5em',
  },
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h1>Footer</h1>
      <SmallPrint />
    </div>
  )
}
