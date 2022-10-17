import React, { useState } from 'react';
import './App.css';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTachometerAltFast } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './components/sidebar/Bar';

library.add(faTachometerAltFast)

const App = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [openSidebar, setOpenSidebar] = useState(false);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const setActiveTabId = (id) => {
    setActiveTab(id)
  };

  const openTheSidebar = () => setOpenSidebar(true)
  const closeTheSidebar = () => setOpenSidebar(false)


  return (
      <div className="App">
        <Nav
          isNavExpanded={isNavExpanded}
          setIsNavExpanded={setIsNavExpanded}
          id={id}
          handleClick={handleClick}
          open={open}
          anchorEl={anchorEl}
        />
        <Sidebar
        open={isOpen} 
        setOpen={setIsOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        activeTab={activeTab}
        setActiveTabId={setActiveTabId}
        openTheSidebar={openTheSidebar}
        openSidebar={openSidebar}
        closeTheSidebar={closeTheSidebar}
        />
          
        
      </div>
  );
}

export default App;
