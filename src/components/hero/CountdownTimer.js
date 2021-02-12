import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import RemainingTime from './RemainingTimeLayout'

const useStyles = makeStyles((theme) => ({
  timerLayoutMain: {
    display: 'flex',
  },
}))

export default function CountdownTimer() {
  const classes = useStyles()
  //! Date is in format MM/DD/YYYY
  const finalDate = '02/13/2021'
  const [countdownDate, setCountdownDate] = useState(
    new Date(finalDate).getTime()
  )
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => updateCountdown(), 1000)
    return () => clearInterval(timer)
  }, [])

  const updateCountdown = () => {
    const currentTime = new Date().getTime()
    const distanceToDate = countdownDate - currentTime

    let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24))
    let hours = Math.floor(
      (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000)

    setTimeRemaining({
      days,
      hours,
      minutes,
      seconds,
    })
  }

  return (
    <>
      <div className={classes.timerLayoutMain}>
        <RemainingTime time={timeRemaining.days} measureableLength={'Days'} />
        <RemainingTime time={timeRemaining.hours} measureableLength={'Hours'} />
        <RemainingTime
          time={timeRemaining.minutes}
          measureableLength={'Minutes'}
        />
        <RemainingTime
          time={timeRemaining.seconds}
          measureableLength={'Seconds'}
        />
      </div>
    </>
  )
}
