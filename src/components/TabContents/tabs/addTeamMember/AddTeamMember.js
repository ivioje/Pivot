import React from 'react';
import './addMember.css'

const AddTeamMember = () => {
    return (
        <div className='new_member_form'>
            <form className='center'>
                <p className='tc'>Add team members</p>
                <div className='center form_div'>
                    <label>
                        Team member name: <br />
                        <input type='name' placeholder='name of team member' />
                    </label>
                    <label>
                        Team member email: <br />
                        <input type='email' placeholder='email of team member' />
                    </label>

                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddTeamMember