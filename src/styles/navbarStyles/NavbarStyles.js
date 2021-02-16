import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    [theme.breakpoints.between('xs', 'sm')]: {
      width: 375,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  root: {
    flexGrow: 1,
    color: '#000000',
    margin: 0,
  },
  navbar: {
    backgroundColor: '#000000',
    overflow: 'hidden',
    height: 50,
  },
  buttonSection: {
    position: 'absolute',
    right: 0,
  },
  userButtons: {
    position: 'absolute',
    top: '0.5em',
    right: '1em',
  },
  loginBackground: {
    width: 200,
    zIndex: -1,
    position: 'fixed',
    right: 0,
    top: 0,
    [theme.breakpoints.between('xs', 'sm')]: {
      width: 100,
      height: 50,
    },
  },
  seLogo: {
    height: 18,
    width: 'auto',
    margin: '-1.5em 0 0 1em',
    [theme.breakpoints.between('xs', 'sm')]: {
      height: 15,
    },
  },
  burgerMenu: {
    color: '#ffffff',
    margin: '-10px -10px',
  },
  buttonText: {
    color: '#000000',
    right: 0,
    top: -10,
  },
  menuText: {
    fontFamily: 'Sora',
    textTransform: 'uppercase',
    fontSize: '0.8em',
  },
}))

export default useStyles
