import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  timeTextLayout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1em',
  },
  timeNumbers: {
    fontFamiy: 'Sora',
    fontSize: '6em',
    color: '#ffffff',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '3em',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '4em',
    },
  },
  timeText: {
    fontFamiy: 'Sora',
    textTransform: 'uppercase',
    letterSpacing: '0.5vw',
    color: '#ffffff',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '0.7em',
    },
  },
  test: {
    color: '#ffffff',
  },
}))

export default function RemainingTimeLayout({ time, type }) {
  const classes = useStyles()
  return (
    <div className={classes.timeTextLayout}>
      {/* <Typography className={classes.timeNumbers}>{time || '00'}</Typography>

      <Typography className={classes.timeText}>{type}</Typography> */}
      <Typography className={classes.timeNumbers}>{time || '00'}</Typography>
      <Typography className={classes.timeText}>{type}</Typography>
    </div>
  )
}
