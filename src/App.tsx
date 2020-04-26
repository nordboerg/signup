import React from 'react'
import { Typography } from '@material-ui/core'
import './App.css'
import { Signup } from 'components/Signup/Signup'

function App() {
  return (
    <div className="App">
      <Typography className="title" variant="h4" gutterBottom>
        Sign up to Tray.io
      </Typography>
      <Signup />
    </div>
  )
}

export default App
