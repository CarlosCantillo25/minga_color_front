import React, { useState } from 'react';
import { Link as Anchor } from "react-router-dom"

function OpenMenu() {
  const [Display, setDisplay] = useState(false);

  const toggleMenu = () => {
    setDisplay(!Display);
  };
  const closeMenu = () => {
    setDisplay(false);
  };

  return (
    <div>
      <button onClick={toggleMenu}><img className='h-11 lg:h-20 mx-3 mt-4' src="/public/Menu.png" alt="Menu" /></button>
      {Display && (
        <div className='flex flex-col fixed h-[400px] w-[250px]  bg-gradient-to-b from-orange-600 to-orange-400 text-white'>
            <div  className='flex justify-around'>
                <img className='w-[200px] ml-2 mt-2' src="./public/User.png" alt="usuario" />
                <button onClick={closeMenu}>X</button>
            </div>
            <button className='flex justify-center gap-3 self-stretch p-3 hover:bg-white hover:text-orange-600 rounded-[30px]'>
                <Anchor >Home</Anchor>
            </button>
            <button className='flex justify-center gap-3 self-stretch p-3  hover:bg-white hover:text-orange-600 rounded-[30px]'>
                <Anchor to="/register">Register</Anchor>
            </button>
            <button className='flex justify-center gap-3 self-stretch p-3  hover:bg-white hover:text-orange-600 rounded-[30px]'>
                <Anchor to="/signin">Sign In</Anchor>
              </button>
 
        </div>
      )}
    </div>
  );
}

export default OpenMenu;
