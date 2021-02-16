import { useState, useEffect } from 'react'
import { IconButton } from '@material-ui/core'
import Confetti from 'react-dom-confetti'
import { SiPlaystation, SiXbox } from 'react-icons/si'
import Fade from 'react-reveal/Fade'

import useStyles from '../../styles/heroStyles/RevealStyles'

const config = {
  angle: '90',
  spread: '260',
  startVelocity: '40',
  elementCount: '94',
  dragFriction: 0.12,
  duration: 3000,
  stagger: '3',
  width: '10px',
  height: '10px',
  perspective: '791px',
  colors: ['#ffffff', '#f00'],
}

const ps4Link =
  'https://www.amazon.co.uk/Shadow-Tomb-Raider-Definitive-PS4/dp/B081FTKGLG/ref=sr_1_1?dchild=1&keywords=shadow+of+the+tomb+raider&qid=1613410511&sr=8-1'
const xboxLink =
  'https://www.amazon.co.uk/Shadow-Tomb-Raider-Xbox-One/dp/B07BHB1VX5/ref=sr_1_2?dchild=1&keywords=shadow+of+the+tomb+raider&qid=1613410511&sr=8-2'

export default function Reveal() {
  const classes = useStyles()
  const [confettiActive, setConfettiActive] = useState(false)

  useEffect(() => {
    setConfettiActive(true)
  }, [])

  return (
    <div>
      <Confetti
        active={confettiActive}
        config={config}
        className={classes.confetti}
      />
      <Fade>
        <h1 className={classes.text}>The game is live!</h1>
        <div className={classes.iconLayout}>
          <IconButton href={ps4Link} target="_blank" rel="noreferrer">
            <SiPlaystation className={classes.gameIcon} />
          </IconButton>
          <IconButton href={xboxLink} target="_blank" rel="noreferrer">
            <SiXbox className={classes.gameIcon} />
          </IconButton>
        </div>
      </Fade>
    </div>
  )
}
