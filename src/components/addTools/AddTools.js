import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Add } from '@mui/icons-material';
import data from '../../static/data.js';
import './addTools.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '500px',
    bgcolor: 'background.paper',
    border: 0,
    boxShadow: 24,
    p: 4,
    overflowY: 'scroll'
};


const AddTools = ({ open, tools, handleClose, handleOpen, addToolsToDashboard }) => {

// console.log(data.tools.map(item => item.id) === tools.id)
// console.log(tools.id);

    return (
        <div>
            <button onClick={handleOpen} className='add center'><Add /> Add tools</button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>

                        <div>
                            <h4 style={{opacity: '.9'}}>Add tools you use regularly to your dashboard.</h4>
                            <div className='tools_container'>
                                {data.tools.map(({ id, name, photo }) => {
                                    return (
                                        <div key={id} className='tools'>
                                            <div><img src={photo} alt={name} /></div>
                                            <p>{name}</p>
                                            <button onClick={() => addToolsToDashboard(photo, name)} className='add add_btn center'>Add tool</button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default AddTools