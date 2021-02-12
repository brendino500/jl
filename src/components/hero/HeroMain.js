import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import heroText from '../../assets/hero-text.png'
import CountdownTimer from './CountdownTimer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tombRaiderImage: {
    height: '8em',
    width: 'auto',
  },
}))

export default function HeroMain() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img
        src={heroText}
        alt="Tomb Raider text"
        className={classes.tombRaiderImage}
      />
      <CountdownTimer />
    </div>
  )
}
