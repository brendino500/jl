import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import RemainingTime from './RemainingTimeLayout'

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
