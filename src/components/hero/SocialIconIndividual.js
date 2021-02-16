import { IconButton } from '@material-ui/core'

import useStyles from '../../styles/heroStyles/SocialIconIndividualStyles'

export default function SocialIconIndividual({ icon, url }) {
  const classes = useStyles()
  return (
    <>
      <IconButton
        href={url}
        target="_blank"
        rel="noreferrer"
        className={`${classes.icon} hvr-underline-from-center`}
      >
        {icon}
      </IconButton>
    </>
  )
}
