import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'

export default function CountdownTimer() {
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
      <Typography>
        {timeRemaining.days || '00'}:{timeRemaining.hours || '00'}:
        {timeRemaining.minutes || '00'}:{timeRemaining.seconds | '00'}
      </Typography>
    </>
  )
}
