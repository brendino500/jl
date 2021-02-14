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
    fontFamiy: 'Noto Sans KT',
    fontSize: '14vh',
  },
  timeText: {
    fontFamiy: 'Sora',
    textTransform: 'uppercase',
    letterSpacing: '0.5vw',
  },
}))

export default function RemainingTimeLayout({ time, type }) {
  const classes = useStyles()
  return (
    <div className={classes.timeTextLayout}>
      <Typography className={classes.timeNumbers}>{time || '00'}</Typography>
      <Typography className={classes.timeText}>{type}</Typography>
    </div>
  )
}
