import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import RemainingTime from './RemainingTimeLayout'
import { dateValidation, day, month, year } from '../../config/dateChange'

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

  dateValidation()

  //! Date is in format MM/DD/YYYY
  const finalDate = `${month}/${day}/${year}`

  const [releaseDate, setReleaseDate] = useState('')
  const [countdownDate, setCountdownDate] = useState(
    new Date(finalDate).getTime()
  )
  const [timeRemaining, setTimeRemaining] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  useEffect(() => {
    const timer = setInterval(() => updateCountdown(), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatNumber = (number) => {
    if (number < 10) {
      return `0${number}`
    } else {
      return `${number}`
    }
  }

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
      days: formatNumber(days),
      hours: formatNumber(hours),
      minutes: formatNumber(minutes),
      seconds: formatNumber(seconds),
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
