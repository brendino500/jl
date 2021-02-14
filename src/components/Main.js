import Navbar from './navbar/Navbar'
import Hero from './hero/HeroMain'
import Footer from './footer/FooterMain'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'absolute',
    flexWrap: 'wrap',
  },
  box1: {
    zIndex: -1,
    backgroundColor: '#f387e1',
    height: '17vh',
    width: '2.5vw',
    marginTop: -10,
    marginLeft: -10,
  },
  box2: {
    zIndex: -1,
    backgroundColor: '#87dad2',
    height: '17vh',
    width: '31.3vw',
    marginTop: -10,
  },
  box3: {
    zIndex: -1,
    backgroundColor: '#07c201',
    height: '17vh',
    width: '31.3vw',
    marginTop: -10,
  },
  box4: {
    zIndex: -1,
    backgroundColor: '#b0942d',
    height: '17vh',
    width: '31.3vw',
    marginTop: -10,
  },
  box5: {
    zIndex: -1,
    backgroundColor: '#637e26',
    height: '17vh',
    width: '2.5vw',
    marginTop: -10,
  },
  box6: {
    zIndex: -1,
    backgroundColor: '#30f4a6',
    height: '83vh',
    width: '2.5vw',
    marginLeft: -10,
  },
  box7: {
    zIndex: -1,
    backgroundColor: '#717667',
    height: '83vh',
    width: '31.3vw',
  },
  box8: {
    zIndex: -1,
    backgroundColor: '#2057ea',
    height: '83vh',
    width: '31.3vw',
  },
  box9: {
    zIndex: -1,
    backgroundColor: '#f9d9c9',
    height: '83vh',
    width: '31.3vw',
  },
  box10: {
    zIndex: -1,
    backgroundColor: '#e29b60',
    height: '83vh',
    width: '2.5vw',
  },
  box11: {
    zIndex: -1,
    backgroundColor: '#3265c6',
    height: '30vh',
    width: '2.5vw',
    marginLeft: -10,
  },
  box12: {
    zIndex: -1,
    backgroundColor: '#d20292',
    height: '30vh',
    width: '31.3vw',
  },
  box13: {
    zIndex: -1,
    backgroundColor: '#b64340',
    height: '30vh',
    width: '31.3vw',
  },
  box14: {
    zIndex: -1,
    backgroundColor: '#ab886f',
    height: '30vh',
    width: '31.3vw',
  },
  box15: {
    zIndex: -1,
    backgroundColor: '#8027ac',
    height: '30vh',
    width: '2.5vw',
  },
}))

export default function Main() {
  const classes = useStyles()
  return (
    <>
      {/* <div className={classes.root}>
        <div className={classes.box1}></div>
        <div className={classes.box2}></div>
        <div className={classes.box3}></div>
        <div className={classes.box4}></div>
        <div className={classes.box5}></div>
        <div className={classes.box6}></div>
        <div className={classes.box7}></div>
        <div className={classes.box8}></div>
        <div className={classes.box9}></div>
        <div className={classes.box10}></div>
        <div className={classes.box11}></div>
        <div className={classes.box12}></div>
        <div className={classes.box13}></div>
        <div className={classes.box14}></div>
        <div className={classes.box15}></div>
      </div> */}
      <Navbar />
      <Hero />
      <Footer />
    </>
  )
}
