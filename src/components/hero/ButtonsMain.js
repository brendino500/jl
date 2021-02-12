import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import SocialIconsLayout from './SocialIconsLayout'

const useStyles = makeStyles((theme) => ({}))

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
      <Button>Add to Calendar</Button>

      <Button
        href="https://square-enix-games.com/"
        target="_blank"
        rel="noreferrer"
      >
        Newsletter SignUp
      </Button>

      <SocialIconsLayout />
    </>
  )
}
