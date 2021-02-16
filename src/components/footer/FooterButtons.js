import { Button, Typography } from '@material-ui/core'
import useStyles from '../../styles/footerStyles/FooterButtonsStyles'

const buttonText = [
  { label: 'Cookie Policy', url: '' },
  { label: 'Terms of Use', url: '' },
  { label: 'Privacy Policy', url: '' },
  { label: 'Support', url: '' },
  { label: 'Material Usage', url: '' },
]

export default function FooterButtons() {
  const classes = useStyles()

  const getBulletPoint = (index) => {
    if (index < buttonText.length - 1) {
      return <Typography>•</Typography>
    }
  }

  return (
    <div className={classes.root}>
      {buttonText.map((text, index) => (
        <div className={classes.buttonFormat} key={index}>
          <Button className={classes.button} href={text.url}>
            {text.label}
          </Button>
          {getBulletPoint(index)}
        </div>
      ))}
    </div>
  )
}
