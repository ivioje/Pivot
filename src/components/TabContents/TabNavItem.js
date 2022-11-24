import React from 'react'

const TabNavItem = ({id, title, activeTab, setActiveTabId, close}) => {
  document.title = 'Pivot' +  ' | ' + activeTab

 // console.log(window.location.href + 'home')
  //window.location.href + activeTab

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