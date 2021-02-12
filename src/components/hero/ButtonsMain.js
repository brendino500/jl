import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import SocialIcons from './SocialIcons'

const useStyles = makeStyles((theme) => ({
  buttonLink: {
    textDecoration: 'none',
  },
}))

export default function ButtonsMain() {
  const classes = useStyles()

  const gapi = window.gapi
  const DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ]
  const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_KEY
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

  return (
    <>
      <Typography>Reveal Event April 27th</Typography>
      <Button>Watch Teaser</Button>
      <Button>Add to Calendar</Button>
      <a
        href="https://square-enix-games.com/"
        target="_blank"
        rel="noreferrer"
        className={classes.buttonLink}
      >
        <Button>Newsletter SignUp</Button>
      </a>
      <SocialIcons />
    </>
  )
}
