import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '125vh',
    [theme.breakpoints.between('sm', 'md')]: {
      height: '130vh',
    },
  },
  tombRaiderImage: {
    position: 'absolute',
    height: '17vh',
    top: '7vh',
    [theme.breakpoints.between('xs', 'sm')]: {
      marginTop: 50,
      width: 350,
      height: 'auto',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      marginTop: 10,
      width: 500,
      height: 'auto',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      marginTop: 10,
    },
  },
}))

export default useStyles
