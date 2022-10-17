import React from 'react';
import user from '../../static/assets/user.jpg';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import './teamDetails.css'
import { ExpandMoreOutlined } from '@mui/icons-material';

const TeamDetails = ({ id, handleClick, open, anchorEl }) => {
  return (
    <div className='teamDetails_container'>
      <div className='user-img'>
        <img src={user} alt='' />
      </div>
      <div className='expand'>
        <p aria-describedby={id} onClick={handleClick}>Team Pivot <span><ExpandMoreOutlined /></span></p>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
            <div>
              <h4>Team members</h4>
              <hr />
              <div>
                <p>Eboreime Rhoda</p>
              </div>
              <button>Add team members</button>
            </div>
          </Box>
        </Popper>
      </div>
    </div>
  )
}

export default TeamDetails