import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './Sidebar.css';

function Sidebar() {
    return (
        <div>
            <Button 
                 startIcon={<AddIcon fontSize='large'/>} 
                 className='sidebar__compose'
             >
              Compose
            </Button>
        </div>
    )
}

export default Sidebar