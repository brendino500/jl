import { Button } from '@material-ui/core'

import useStyles from '../../styles/navbarStyles/UserButtonsStyles'

export default function UserButtons({ text }) {
  const classes = useStyles()
  return (
    <>
      <Button
        disableRipple={true}
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
