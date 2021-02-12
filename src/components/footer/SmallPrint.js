import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  smallPrintContainer: {
    width: '80vw',
    display: 'inline',
  },
  font: {
    fontFamily: 'Noto Sans KR',
    color: '#949494',
    fontSize: '0.7em',
    lineHeight: '2em',
    textAlign: 'center',
  },
}))

export default function SmallPrint() {
  const classes = useStyles()
  return (
    <div className={classes.smallPrintContainer}>
      <Typography className={classes.font}>
        Tomb Raider ©2018 Square Enix and the Square Enix logo are registered
        trademarks of Square Enix Holdings Co., Ldt. Lara Croft, Tomb Raider,
        Crystal Synamics, the Crystal Dynamic logo, Edios, and the Edios logo
        are trademarks of Square Enix Ltd. “PlayStation” and the “PS” Family
        logo are registered trademarks and “PS3”, “PS4” and the PlayStation
        Network logo are trademarks of Sony Computer Entertainment Inc.
        Microsoft, Kinect, Xbox, Xbox 360, Xbox LIVE, and the Xbox logos are
        trademarks of the Microsoft Group of companies and are used under
        license from Microsoft. This was a really fun challenge so thank you for
        that lol. The rating icon is a registered trademark of the Pan European
        Game Information. All other trademarks are the property of their
        respective owners. All rights reserved.
      </Typography>
    </div>
  )
}
