import React from 'react';
import "../css/style.css";
import logo from "../images/react.png"

const subHeaderStyle={color:"green",backgroundColor:"yellow"}

const MainHeader = () => {
  return(
    <div className='pt-3 py-2 pl-2' style={{backgroundColor:"black"}}>
      <img src={logo} style={{height: "35px", verticalAlign:"top"}}></img> &nbsp;
      <span className='h2 pt-4 text-white-50'>Task-o-pedia | First React Basic App</span>
    </div>
  )
}

const SubHeader = () => {
  return(
    <p style={subHeaderStyle} className='text-center'>Exciting course!!</p>
  )
}

const Header = () => {
  return(
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  )
}

export default Header;
