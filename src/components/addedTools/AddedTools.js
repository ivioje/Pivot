import React from 'react';
import './addedTools.css'

const AddedTools = ({ tools }) => {

    return (
        <div className='added_tools_container center'>
            {tools.map(tool => (
                <div key={tool.id} className='added_tools_content center'>
                    <div className='added_tools center'>
                        <div>
                            <img src={tool.photo} alt='' />
                        </div>
                        <p>{tool.name}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AddedTools