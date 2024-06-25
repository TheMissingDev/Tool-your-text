import React from 'react'
// import { FaBacon } from "react-icons/fa";npm
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Alert(props) {
    const handleDisplay = () =>{
      document.querySelector('.alert-div').style.display = 'none'
    } 
    
  return (
    props.alert && <div className="alert">
    <div className="alert-div">
       <strong>{props.alert.msg}</strong> 
       <div className="dismiss-icon">
       {/* <FaBacon/> */}
       {/* <FontAwesomeIcon  onClick = {handleDisplay}className="dismiss-Icon"icon={faXmark}/> */}
       {/* Your <FontAwesomeIcon icon="fa-regular fa-coffee" /> is hot! */}
       </div>
    </div>
    </div>
  )
}
