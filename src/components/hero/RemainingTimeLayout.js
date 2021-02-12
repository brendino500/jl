import React from 'react'

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
}))

export default function RemainingTimeLayout({ time, measureableLength }) {
  const classes = useStyles()
  return (
    <div className={classes.timeTextLayout}>
      <Typography>{time || '00'}</Typography>
      <Typography>{measureableLength}</Typography>
    </div>
  )
}
