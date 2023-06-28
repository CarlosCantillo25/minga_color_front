import React, { useState } from 'react';


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
      <button onClick={toggleMenu}><img className='h-11 lg:h-20 mx-3 mt-4' src="/public/Menu.png" alt="Menu" />
</button>
      {Display && (
        <div className='flex flex-col fixed h-[400px] w-[250px] ml-5 mt-[-5] bg-gradient-to-b from-orange-600 to-orange-400 text-white'>
            <div  className='flex justify-around'>
                <img className='w-[200px] ml-2 mt-2' src="./public/User.png" alt="usuario" />
                <button onClick={closeMenu}>X</button>
            </div>
            <button className='flex justify-center gap-3 self-stretch p-3'>Home</button>
            <button className='flex justify-center gap-3 self-stretch p-3'>Comics</button>
            <button className='flex justify-center gap-3 self-stretch p-3'>MyComics</button>
            <button className='flex justify-center gap-3 self-stretch p-3'>Favorite</button>
            <button className='flex justify-center gap-3 self-stretch p-3'>Logout</button>
        </div>
      )}
    </div>
  );
}

export default OpenMenu;
