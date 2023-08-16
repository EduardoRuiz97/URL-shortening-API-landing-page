import logo from '../../images/logo.svg';
import { AiOutlineMenu } from "react-icons/ai";
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  }



  return (
    <header className='header'>
      <img src={logo} alt='page logo icon'/>

      <button className='header__icon-button' onClick={openMenuHandler}>
        <AiOutlineMenu className='header__icon-button__icon'/>
      </button>

      <Navbar isOpen={isMenuOpen}/>
    </header>
  )
};

export default Header;