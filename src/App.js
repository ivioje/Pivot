import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Sidebar from './components/sidebar/Bar';
import CallTeam from './components/TabContents/tabs/callTeam/CallTeam';
import Dashboard from './components/TabContents/tabs/dashboard/Dashboard';


const App = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [openSidebar, setOpenSidebar] = useState(false);
  const [tools, setTools] = useState([])

  //console.log(document.location.href )

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

  const addToolsToDashboard = (photo, name) => {
    setTools([...tools, {
      id: tools.length,
      photo: photo,
      name: name
    }])
  }

  console.log();


  return (
    <BrowserRouter>
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
          addToolsToDashboard={addToolsToDashboard}
          tools={tools}
        />
      </div>
      {/* <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/callTeam' element={<CallTeam />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
