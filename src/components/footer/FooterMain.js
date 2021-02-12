import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '70vh',
  },
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h1>Footer</h1>
    </div>
  )
}
