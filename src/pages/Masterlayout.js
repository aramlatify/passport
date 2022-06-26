import React from 'react'
import useStyles from './masterstyle'
import DesktopMenu from './menu'
import Footer from './footer'
import Main from './main'


export default function MasterLayout() {
  const classes = useStyles()
  return (
      <div className={classes.root}>
       <DesktopMenu />
       <Main/>
        <Footer />
      </div>
   
  )
}
