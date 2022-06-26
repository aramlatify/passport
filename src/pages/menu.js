import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { motion, AnimateSharedLayout } from "framer-motion";
import { screens } from "./data";
import "./styles.css";


const useStyles = makeStyles((theme) => ({
    root: {
      
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
      },
      minHeight: {
        minHeight: "30px !important"
      },
      smallTypo: {
        fontSize: "15px "},
      
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black'
    },
    title: {
        flexGrow: 1,
        color: 'black'
    },
    appBarTransparent: {
        backgroundColor: 'rgba(72,79,83)'
    },
    appBarSolid: {
        backgroundColor: 'rgba(67, 129, 168,0.5)'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [selected, setSelected] = useState(0);
    const [hovered, setHovered] = useState(undefined);
  
  const [preSelect, setPreSelect] = useState(undefined);

    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 310
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
      <AppBar position="fixed" className={classes[navRef.current]} >
        <Toolbar className={classes.minHeight}classes={{ regular: classes.regular, root: classes.root }}>
        <IconButton className={classes.smallTypo} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        
                    </IconButton>
                    <AnimateSharedLayout>
                      
      <ol onMouseOut={() => setHovered(undefined)} className={classes.smallTypo} style={{ transform: "translateZ(0)",position: 'absolute',right: '20px'}}>
        {screens.map(({ title, color }, i) => (
          <motion.li 
            animate
            key={i}
            className={classes.smallTypo}
            className={`title ${i === selected && "selected"}`}
            style={{ color: i === selected ? color : "white" }}
            onMouseOver={() => {
                setHovered(i);
                if (!selected) {
                  setPreSelect(i);
                }
              }}
            onClick={() => setSelected(i)}
          >
              {i === hovered && (
              <motion.div
                layoutId="hover"
                style={{
                  width: "100%",
                  height: 2,
                  borderRadius: 4,
                  background: "black",
                  position: "absolute",
                  bottom: -2,
                  bordertoprightradius: "8px",
                  bordertopleftradius: "8px",
                  marginleft: "2px",
                  marginright: "2px",
                  backgroundColor: color
                }}
              />
            )}
            {i === selected && (
              <motion.div
                layoutId="underline"
                className="underline"
                style={{ backgroundColor: color }}
              />
            )}
            {title}
          </motion.li>
        ))}
      </ol>
     
    </AnimateSharedLayout>
          <Button className={classes.smallTypo} color="black">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
       