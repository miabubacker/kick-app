import React from 'react'
import './Header.scss'
import Logo from '../Assets/Imgs/Logo.svg'
import MenuFillIcon from "remixicon-react/MenuFillIcon"
import SearchLineIcon from "remixicon-react/SearchLineIcon"
import ArrowDownSFillIcon from "remixicon-react/ArrowDownSFillIcon"
import UserFillIcon from "remixicon-react/UserFillIcon"
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
          <div className='title'>Men <ArrowDownSFillIcon/></div>
          <div className='title'>Women <ArrowDownSFillIcon /></div>
        </div>
        <div className='menubar'>
          {/* <img src={menubar} /> */}
          <MenuFillIcon/>
        </div>
        {/* logo */}
        <div>
          <img className='logo' src={Logo}  onClick={()=>{backToHome()}}/>
        </div>
        {/* aboutUs */}
        <div className='aboutUs'>
          <div className='seachIcon'><SearchLineIcon/></div>
          <div>
            <UserFillIcon/>
          </div>
          <div className='cart'>0</div>
        </div>

      </section>
    </>
  )
}
