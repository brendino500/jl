import { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'

import RemainingTime from './RemainingTimeLayout'
import { countdownDate } from '../../config/dateChange'
import useStyles from '../../styles/heroStyles/CountdownTimerStyles'

export default function CountdownTimer() {
  const classes = useStyles()
  const [timeRemaining, setTimeRemaining] = useState([
    { value: '00', text: 'days' },
    { value: '00', text: 'hours' },
    { value: '00', text: 'mins' },
    { value: '00', text: 'secs' },
  ])

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

    setTimeRemaining([
      { value: formatNumber(days), text: 'days' },
      { value: formatNumber(hours), text: 'hours' },
      { value: formatNumber(minutes), text: 'mins' },
      { value: formatNumber(seconds), text: 'secs' },
    ])
  }

  const formatNumber = (number) => {
    if (number < 10) {
      return `0${Math.max(number, 0)}`
    } else {
      return `${Math.max(number, 0)}`
    }
  }

  const getColon = (index) => {
    if (index < timeRemaining.length - 1) {
      return <Typography className={classes.colon}>:</Typography>
    }
  }

  console.log('timeremainingState', timeRemaining)
  return (
    <div className={classes.container}>
      <div className={classes.timerLayoutMain}>
        {timeRemaining.map((time, index) => (
          <div className={classes.timerFormat} key={index}>
            <RemainingTime time={time.value} type={time.text} />
            {getColon(index)}
          </div>
        ))}
      </div>
    </div>
  )
}
