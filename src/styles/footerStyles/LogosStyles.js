import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  logoGrid: {
    marginTop: '3%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.between('xs', 'sm')]: {
      flexWrap: 'wrap',
    },
  },
  logos: {
    height: '3em',
    marginLeft: '2em',
  },
  seLogo: {
    height: '2em',
    width: 'auto',
    marginTop: '2em',
    marginBottom: '1em',
    [theme.breakpoints.between('xs', 'sm')]: {
      height: 20,
    },
  },
  seLogoContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export default useStyles
