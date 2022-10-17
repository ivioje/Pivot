import React from 'react'
import AddTools from '../../../addTools/AddTools'
import './dashboard.css'
import NoTools from './emptyToolsList'

const Dashboard = ({ open, setOpen, handleOpen, handleClose }) => {
    return (
        <div className='dashboard_container'>
            <div className='dashboard_content'>
                <div className='dashboard_content_head'>
                    <h2>Welcome, {'Pivot'}</h2>
                    <AddTools
                        open={open}
                        setOpen={setOpen}
                        handleClose={handleClose}
                        handleOpen={handleOpen}
                    />
                </div>
                <h4>Current tools</h4>
                <NoTools />
            </div>
        </div>
    )
}

export default Dashboard