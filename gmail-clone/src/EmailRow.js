import React from 'react'
 import './EmailRow.css'
 import IconButton from '@material-ui/core/IconButton';
 import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
 import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
 import Checkbox from '@material-ui/core/Checkbox';
 import { useHistory } from 'react-router';

 function EmailRow({ title, subject , discription, time , id}) {
     const history = useHistory();


     return (
         <div onClick={() => history.push('/mail')} className='emailRow' >
             <div className='emailRow__options' >
                 <Checkbox />
                 <IconButton>
                     <StarBorderOutlinedIcon />
                 </IconButton>
                 <IconButton>
                     <LabelOutlinedIcon />
                 </IconButton>

             </div>

             <h3 className='emailRow__title' >
                 {title}
             </h3>

             <div className='emailRow__message' >
                 <h4>
                     {subject}{'  '}
                     <span className='emailRow__description' >
                         {discription}
                     </span>
                 </h4>

             </div>

             <p className='emailRow__time' >
                 {time}
             </p>
         </div>
     )
 }

 export default EmailRow