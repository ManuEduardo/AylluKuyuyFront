import React from 'react'
import {ButtonBack} from "../../components"
import {useNavigate} from "react-router-dom"
import icon from "../../assets/icon.png"

const Register = ():JSX.Element => {
    const navigate = useNavigate()
  return (
    <div>
        <ButtonBack onClick={()=>navigate(-1)}/>
      <div className=" max-w-lg mx-1 bg-sky-300">
        <h2>Registrar</h2>
        in
      </div>
      <img src={icon} alt="logo" className=" w-32 mx-auto mt-6" />
    </div>
  )
}

export default Register