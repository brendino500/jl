import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  icon: {
    color: 'black',
  },
}))

export default function SocialIconIndividual({ icon, url }) {
  const classes = useStyles()
  return (
    <>
      <IconButton
        href={url}
        target="_blank"
        rel="noreferrer"
        className={classes.icon}
      >
        {icon}
      </IconButton>
    </>
  )
}
