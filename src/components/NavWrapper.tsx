import React from 'react'
import { useNavigate, Outlet } from "react-router-dom";
import { NavWrapperProps } from '../models';

const NavWrapper = ():JSX.Element => {
  return (
    <div>
        <div></div>
        <Outlet/>
        <div ></div>
    </div>
  )
}

export default NavWrapper