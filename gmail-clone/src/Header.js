import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className='header'>
            <div className='header__left' >
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img 
                 src='https://cdn.vox-cdn.com/thumbor/skG1-Pf080fswpt8cGgYTJDN9i4=/0x0:1320x880/1220x813/filters:focal(555x335:765x545):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67798829/newgmaillogo.0.jpg' 
                 alt='' 
                 />
            </div>

            <div className='header__middle' >
             <IconButton>
                   <SearchIcon />
              </IconButton>
                   <input placeholder='Search Mail' type='text' />
                <IconButton>
                    <ArrowDropDownIcon className='header__inputCaret' />
              </IconButton>
               
            </div>

            <div className='header__right' >
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar />

            </div>
        
        </div>
    )
}

export default Header