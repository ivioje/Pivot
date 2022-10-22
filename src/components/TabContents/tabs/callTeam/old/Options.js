import React, { useContext, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';
import { Context } from '../../../../../Context';

const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(Context)
    const [idToCall, setIdToCall] = useState('');

    return (
        <div className='options_container'>
            <div className='elevation'>
                <form className='noValidate' noValidate autoComplete='off'>
                    <div className='form-group'>
                        <div className=''>
                            <p>Account Info</p>
                            <input aria-label='Name' value={name} onChange={(e) => setName(e.target.value)} />
                            <CopyToClipboard text={me} className='copy-to-clipboard'>
                                <button>
                                    <Assignment /> Copy Your ID
                                </button>
                            </CopyToClipboard>
                        </div>
                        <div className=''>
                            <p>Make a call</p>
                            <input aria-label='Id to call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                            {callAccepted && !callEnded ? (
                                <button onClick={leaveCall}><PhoneDisabled />  Hang up</button>
                            ) : (
                                <button onClick={() => callUser(idToCall)}><Phone /> Call</button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
            options
            {children}
        </div>
    )
}

export default Options