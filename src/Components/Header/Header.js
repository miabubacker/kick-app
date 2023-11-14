import React from 'react'
import './Header.scss'
import Logo from '../Assets/Imgs/Logo.svg'
import caret_down from '../Assets/iconsImg/caret_down.svg'
import searchIcon from '../Assets/iconsImg/Search.svg'
import user from '../Assets/iconsImg/User.svg'
import menubar from '../Assets/iconsImg/menuBar.svg'
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
   const backToHome=()=>{
    navigate('/');
   }
  return (
    <>
      <section className='headerContainer'>
        <div className='newDrops'>
          <div  onClick={()=>backToHome()}>New Drops 🔥</div>
          <div>Men <img src={caret_down} /></div>
          <div>Women <img src={caret_down} /></div>
        </div>
        <div className='menubar'>
          <img src={menubar} />
        </div>
        {/* logo */}
        <div>
          <img className='logo' src={Logo} />
        </div>
        {/* aboutUs */}
        <div className='aboutUs'>
          <div className='seachIcon'><img src={searchIcon} /></div>
          <div><img src={user} /></div>
          <div className='cart'>0</div>
        </div>

      </section>
    </>
  )
}
