import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import RemainingTime from './RemainingTimeLayout'
import { releaseDate, countdownDate } from '../../config/dateChange'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  timerLayoutMain: {
    display: 'flex',
  },
  divider: {
    width: 'auto',
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
        <RemainingTime time={timeRemaining.hours} type={'Hours'} />
        <RemainingTime time={timeRemaining.minutes} type={'Minutes'} />
        <RemainingTime time={timeRemaining.seconds} type={'Seconds'} />
      </div>
    </div>
  )
}
