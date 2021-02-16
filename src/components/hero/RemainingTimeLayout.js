import { Typography } from '@material-ui/core'

import useStyles from '../../styles/heroStyles/RemainingTimeLayoutStyles'

export default function RemainingTimeLayout({ time, type }) {
  const classes = useStyles()
  return (
    <div className={classes.timeTextLayout}>
      <Typography className={classes.timeNumbers}>{time || '00'}</Typography>
      <Typography className={classes.timeText}>{type}</Typography>
    </div>
  )
}
