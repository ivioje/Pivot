import React, { useState } from 'react';
import Popout from 'react-popout'
import './styles.css';
import { ArrowOutward } from '@mui/icons-material';


const CallTeam = () => {
  const [isPoppedOut, setIsPoppedOut] = useState(false)

  const popout = () => setIsPoppedOut(true)
  const popoutClosed = () => setIsPoppedOut(!isPoppedOut)

  return (
    isPoppedOut ?
      (
        <div className='popOut'>
          <Popout url='https://pivotcallforteams.vercel.app/create' title='Pivot call for teams' onClosing={popoutClosed}
          options={{width: '1000', height: '1000'}} >
            <div>Popped out content!</div>
          </Popout>
        </div>

      )
      : (
        <div className='video_container'>
          <iframe className='frame' src='https://pivotcallforteams.vercel.app/create' />
          <strong onClick={popout} title='pop out'><ArrowOutward /></strong>
        </div>
      )

  )
}

export default CallTeam

{/* <div className='video_container'>
      <iframe className='frame' src='https://pivotcallforteams.vercel.app/create' />
      <Popout url='popout.html' title='Window title' onClosing={this.popupClosed}>
      
        <div>Popped out content!</div>
      </Popout>
    </div> */}