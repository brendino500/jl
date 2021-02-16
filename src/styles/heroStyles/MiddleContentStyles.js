import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.between('xs', 'sm')]: {
      marginTop: '-10em',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      marginTop: -50,
    },
  },
  timerLayoutMain: {
    display: 'flex',
  },
  divider: {
    width: 500,
    [theme.breakpoints.between('xs', 'sm')]: {
      width: 300,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: 400,
    },
  },
  revealText: {
    color: '#C44027',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5vw',
    marginTop: '2vh',
    fontFamily: 'Sora',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 15,
    },
  },
  teaserButton: {
    width: 210,
  },
}))
export default useStyles
