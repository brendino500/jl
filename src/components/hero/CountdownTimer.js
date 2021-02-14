import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import RemainingTime from './RemainingTimeLayout'
import { countdownDate } from '../../config/dateChange'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '6vh',
  },
  timerLayoutMain: {
    display: 'flex',
  },
  divider: {
    width: 'auto',
  },
  colon: {
    fontSize: '5em',
    marginTop: '5vh',
    fontFamily: 'Sora',
    color: '#ffffff',
  },
}))

export default function CountdownTimer() {
  const classes = useStyles()
  const [timeRemaining, setTimeRemaining] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  useEffect(() => {
    updateCountdown()
    const timer = setInterval(() => updateCountdown(), 1000)
    return () => clearInterval(timer)
  }, [])

  const updateCountdown = () => {
    const currentTime = new Date().getTime()
    const distanceToDate = countdownDate - currentTime

    if (distanceToDate <= 0) {
      window.location.reload()
    }

    let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24))
    let hours = Math.floor(
      (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000)

    setTimeRemaining({
      days: formatNumber(days),
      hours: formatNumber(hours),
      minutes: formatNumber(minutes),
      seconds: formatNumber(seconds),
    })
  }

  const formatNumber = (number) => {
    if (number < 10) {
      return `0${Math.max(number, 0)}`
    } else {
      return `${Math.max(number, 0)}`
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.timerLayoutMain}>
        <RemainingTime time={timeRemaining.days} type={'Days'} />
        <Typography className={classes.colon}>:</Typography>
        <RemainingTime time={timeRemaining.hours} type={'Hours'} />
        <Typography className={classes.colon}>:</Typography>
        <RemainingTime time={timeRemaining.minutes} type={'Mins'} />
        <Typography className={classes.colon}>:</Typography>
        <RemainingTime time={timeRemaining.seconds} type={'Secs'} />
      </div>
    </div>
  )
}
