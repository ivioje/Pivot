import React from 'react';
// import { Link } from 'react-router-dom';
import { NotificationsOutlined } from '@mui/icons-material';
import Search from '../searchBar/Search';
import TeamDetails from '../teamDetails/TeamDetails';
import './nav.css'

const Nav = ({ isNavExpanded, setIsNavExpanded, id, handleClick, open, anchorEl }) => {
    return (
        <nav className="navigation center">
            <a href="/" className="brand-name">
                PIVOT
            </a>
            <button
                className="hamburger"
                onClick={() => setIsNavExpanded(!isNavExpanded)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul className='between'>
                    <li>
                        <div><Search /> </div>
                    </li>
                    <li>
                        <div className='pa'>
                            <TeamDetails id={id}
                                handleClick={handleClick}
                                open={open}
                                anchorEl={anchorEl} />
                        </div>
                    </li>
                    <li>
                        <a href="/notifications"><NotificationsOutlined /></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav