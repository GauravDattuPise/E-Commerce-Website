import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <>
    <div className='text-center'>
    <div className="list-group">
        <h4>user dashborad</h4>
        <NavLink to="/dash-board/user/profile" className="list-group-item list-group-item-action">user profile</NavLink>
        <NavLink to="/dash-board/user/orders" className="list-group-item list-group-item-action">user orders</NavLink>
    </div>
    </div>

</>
  )
}

export default UserMenu