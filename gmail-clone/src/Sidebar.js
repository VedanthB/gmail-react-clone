import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { openSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { auth } from './firebase';
import { logout } from './features/userSlice';


function Sidebar() {
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())

        })
    }

    return (
        <div>
            <Button 
                 startIcon={<AddIcon fontSize='large'/>} 
                 className='sidebar__compose'
                 onClick={() => dispatch(openSendMessage())}
             >
              Compose
            </Button>


             <SidebarOption Icon={InboxIcon} title='Inbox' number={54} selected='true' />
             <SidebarOption Icon={StarIcon} title='Starred' number={14} />
             <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={4} />
             <SidebarOption Icon={LabelImportantIcon} title='Important' number={6} />
             <SidebarOption Icon={NearMeIcon} title='Sent' number={10} />
             <SidebarOption Icon={NoteIcon} title='Drafts' number={89} />
             <SidebarOption Icon={ExpandMoreIcon} title='More' number={7} />

             <div className='sidebar__footer' >
                 <div className='sidebar__footerIcons' >
                 <IconButton>
                     <PersonIcon />
                 </IconButton>
                 <IconButton>
                     <DuoIcon/>
                 </IconButton>
                 <IconButton>
                     <PhoneIcon />
                 </IconButton>
                 </div>
             </div>

             <div>
                 <Button
                  startIcon={<ExitToAppIcon fontSize='large'/>} 
                  className='sidebar__logout'
                  onClick={signOut}
                 >
                    Log Out
                 </Button>

             </div>
        </div>
    )
}

export default Sidebar