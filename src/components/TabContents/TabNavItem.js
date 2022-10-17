import React from 'react'

const TabNavItem = ({id, title, activeTab, setActiveTabId, close}) => {
  document.title = 'Pivot' +  ' | ' + activeTab
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