import { Cancel, Close } from '@mui/icons-material'
import React, { useState } from 'react'
import AddedTools from '../../../addedTools/AddedTools'
import AddTools from '../../../addTools/AddTools'
import './dashboard.css'
import NoTools from './emptyToolsList'

const Dashboard = ({
    open, tools,
    setOpen,
    handleOpen,
    handleClose,
    addToolsToDashboard }) => {
    const [closeMsg, setCloseMsg] = useState(true)

    const closeMessage = () => {
        setCloseMsg(false)
    }

    return (
        <div className='dashboard_container'>
            <div className='dashboard_content center'>
                <div className='dashboard_content_head between'>
                    <h2>Welcome, {'Pivot'}</h2>
                    <AddTools
                        open={open}
                        tools={tools}
                        setOpen={setOpen}
                        handleClose={handleClose}
                        handleOpen={handleOpen}
                        addToolsToDashboard={addToolsToDashboard}
                    />
                </div>
                <h4>Current tools</h4>
                {tools.length === 0 ?
                    <NoTools /> :
                    <AddedTools tools={tools} />
                }

            </div>
            <div className={tools.length >= 1 ? 'success_message' : 'hide_msg'}>

                <p> Added successfully! <span><Close /></span></p>


            </div>
        </div>
    )
}

export default Dashboard