import React from 'react'

const TabNavItem = ({id, title, activeTab, setActiveTabId, close}) => {
  return (
    <p onClick={() => {
      setActiveTabId(id);
      close();
    }}
    className={activeTab === id ? 'active' : ''}>
        { title }
    </p>
  )
}

export default TabNavItem