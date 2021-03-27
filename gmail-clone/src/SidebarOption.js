import React from 'react'
import './SidebarOption.css'


function SidebarOption({ Icon, title, number, selected }) {
     return (
         <div className={`sidebarOption ${ selected && 'sidebarOption--active' }` } > 
             <Icon />
             <h1> {title} </h1>
             <p> {number} </p>

         </div>
     )
 }

export default SidebarOption;