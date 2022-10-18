import React from 'react'
import {
    AddIcCallOutlined,
    LogoutOutlined,
    PersonAddOutlined,
    ChatOutlined,
    PersonOutlineOutlined,
    Close,
    ChevronRight
} from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sidebar.css';
import TabNavItem from '../TabContents/TabNavItem';
import Dashboard from '../TabContents/tabs/dashboard/Dashboard';
import TabContent from '../TabContents/TabContent';

const Sidebar = ({ activeTab,
    setActiveTabId,
    open, tools,
    setOpen,
    handleClose,
    handleOpen,
    openTheSidebar,
    openSidebar,
    closeTheSidebar,
    addToolsToDashboard }) => {
    return (
        <div className='tabs_view'>
            <ToggleSidebar onClick={openTheSidebar} showSideBar={openSidebar} />

            <div className={openSidebar ? 'sidebar_content opened' : 'sidebar_content'}>
                <button className='close center' onClick={closeTheSidebar}><Close /></button>
                <TabNavItem title='Dashboard' id='dashboard' activeTab={activeTab} setActiveTabId={setActiveTabId} close={closeTheSidebar} />
                <TabNavItem title='Add team member' id='addTeamMember' activeTab={activeTab} setActiveTabId={setActiveTabId} close={closeTheSidebar} />
                <TabNavItem title='Call Team' id='callTeam' activeTab={activeTab} setActiveTabId={setActiveTabId} close={closeTheSidebar} />
                <TabNavItem title='Chat' id='chat' activeTab={activeTab} setActiveTabId={setActiveTabId} close={closeTheSidebar} />
                <TabNavItem title='Update Profile' id='updateProfile' activeTab={activeTab} setActiveTabId={setActiveTabId} close={closeTheSidebar} />
                <TabNavItem title='Logout' id='logout' activeTab={activeTab} setActiveTabId={setActiveTabId} close={closeTheSidebar} />

                <div className='support'>
                    <TabNavItem title='Contact support' id='support' activeTab={activeTab} setActiveTabId={setActiveTabId} close={closeTheSidebar} />
                </div>
            </div>

            <div className='outlet center'>
                <TabContent id='dashboard' activeTab={activeTab}>
                    <Dashboard
                        open={open}
                        tools={tools}
                        setOpen={setOpen}
                        handleOpen={handleOpen}
                        closeTheSidebar={closeTheSidebar}
                        handleClose={handleClose}
                        addToolsToDashboard={addToolsToDashboard}
                    />
                </TabContent>
                <TabContent id='addTeamMember' activeTab={activeTab}>
                    <p>add team member</p>
                </TabContent>
                <TabContent id='callTeam' activeTab={activeTab}>
                    <p>call team</p>
                </TabContent>
                <TabContent id='chat' activeTab={activeTab}>
                    <p>chat</p>
                </TabContent>
                <TabContent id='updateProfile' activeTab={activeTab}>
                    <p>update profile</p>
                </TabContent>
                <TabContent id='logout' activeTab={activeTab}>
                    <p>logout</p>
                </TabContent>
                <TabContent id='support' activeTab={activeTab}>
                    <p>support</p>
                </TabContent>
            </div>

        </div>
    )
}

export default Sidebar

const ToggleSidebar = (props) => {
    return (
        <button onClick={props.onClick} className="openArrow">
            <span><ChevronRight /></span>
        </button>
    )
}