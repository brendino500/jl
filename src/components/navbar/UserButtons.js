import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  buttonText: {
    color: 'black',
    fontFamily: 'Sora',
    marginLeft: '1em',
  },
}))

export default function UserButtons({ text }) {
  const classes = useStyles()
  return (
    <>
      <Button
        disableRipple="true"
        className={classes.buttonText}
        href="http://square-enix-games.com"
        target="_blank"
        rel="noreferrer"
      >
        {text}
      </Button>
    </>
  )
}
