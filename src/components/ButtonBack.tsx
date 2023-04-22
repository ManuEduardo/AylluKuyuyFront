import React from 'react'
import imgBack from "../assets/back.png"

interface Props extends React.HTMLAttributes<HTMLButtonElement>{}
function ButtonBack({ ...props }: Props) {
  return (
    <button className=" m-4 bg-yellow-500 p-1 rounded-full shadow-xl" {...props}>
        <img src={imgBack} alt="volver" />
    </button>
  )
}

export default ButtonBack