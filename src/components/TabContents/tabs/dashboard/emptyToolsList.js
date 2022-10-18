import React from 'react'
import illustration from '../../../../static/assets/illustartion.svg'

const NoTools = () => {
  return (
    <div className='empty_tools_list'>
        <p>All your tools will be added here</p>
        <img src={illustration} alt='' />
    </div>
  )
}

export default NoTools