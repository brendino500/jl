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
  timerFormat: {
    display: 'flex',
  },
  timerLayoutMain: {
    display: 'flex',
  },
  divider: {
    width: 'auto',
  },
  colon: {
    fontSize: '5em',
    marginTop: 50,
    fontFamily: 'Sora',
    color: '#ffffff',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '3em',
      marginTop: '2vh',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '3em',
      marginTop: 30,
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: '4em',
      marginTop: 50,
    },
  },
}))

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
