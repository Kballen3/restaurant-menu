import React from 'react'
import Menu from './Menu'

const MenuAll = ({menus, }) => (
    <div>
        { menus.map( menu => 
            <Menu 
            key={menu.id}
            {...menu}
            />
        )}
    </div>
)


export default MenuAll;