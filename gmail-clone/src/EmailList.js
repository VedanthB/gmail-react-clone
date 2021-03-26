import React from 'react'
 import './EmailList.css'
 import Checkbox from '@material-ui/core/Checkbox';
 import IconButton from '@material-ui/core/IconButton';
 import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
 import RedoIcon from '@material-ui/icons/Redo';
 import MoreVertIcon from '@material-ui/icons/MoreVert';
 import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
 import ChevronRightIcon from '@material-ui/icons/ChevronRight';
 import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
 import SettingsIcon from '@material-ui/icons/Settings';
 import InboxIcon from '@material-ui/icons/Inbox';
 import Section from './Section';
 import PeopleIcon from '@material-ui/icons/People';
 import LocalOfferIcon from '@material-ui/icons/LocalOffer';
 import EmailRow from './EmailRow';

 function EmailList() {
     return (
         <div className='emailList' >
             <div className='emailList__settings' >
                 <div className='emailList__settingsLeft' >
                       <Checkbox />

                          <IconButton>
                              <ArrowDropDownIcon />
                          </IconButton>

                          <IconButton>
                              <RedoIcon />
                          </IconButton>

                          <IconButton>
                                <MoreVertIcon />
                          </IconButton>
                 </div>

                 <div className='emailList__settingsRight' >
                     <IconButton>
                         <ChevronLeftIcon />
                     </IconButton>

                     <IconButton>
                         <ChevronRightIcon />
                     </IconButton>

                     <IconButton>
                         <KeyboardHideIcon />
                     </IconButton>

                     <IconButton>
                         <SettingsIcon />
                     </IconButton>

                 </div>  
             </div>
             <div className='emailList__sections' >

                      <Section Icon={InboxIcon} title='primary' color='red' selected />
                      <Section Icon={PeopleIcon} title='Social' color='#1A73E8'  />
                      <Section Icon={LocalOfferIcon } title='Promotion' color='green'  />

                 </div>

                   <div className='emailList_list' >

                       <EmailRow title='Twitch' discription='This is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a test' time='10:00 PM' subject='Hello Fellow Streamer!!' />
                       <EmailRow title='Facebook' discription='This is a test too' time='11:21 PM' subject='Hello Fellow bummer!!' />

                  </div>



         </div>
     )
 }

 export default EmailList