
function App() {
  

  return (
    <div className=' bg-[url("/public/Background2.png")] max-sm:bg-[url("/Background1.png")] bg-no-repeat bg-cover  lg:h-[85vh] lg:bg-contain h-[52vh] max-md:h-screen  '>
    <nav className='flex justify-between h-[12vh]'>
      <img className='h-11 mx-3 mt-4' src="/public/Menu.png" alt="Menu" />
      <img className='md:hidden h-7 mr-7 mt-6' src="/public/menu2.png" alt="menu2" />
      <img className='max-md:hidden h-7 mr-7 mt-6' src="/public/Logo.png" alt="logo" />
    </nav>
    <main  className='flex h-[90vh] md:ml-6 lg:mt-20 lg:ml-14 flex-col max-md:justify-center max-md:items-center lg:gap-2 gap-4 '>
      <h1 className='px-5 text-white max-md:text-center text-[35px] lg:text-[48.8px] font-bold leading-[95.187%] '>For the love of manga</h1>
      <p className='text-white md: ml-6 lg:p-5 max-md:text-center text-xl leading-[95.187%]'>Explore our varieties</p>
      <p className='max-md:hidden text-white ml-4'>#MingaLove❤</p>
      <button className='flex justify-center md:ml-6 lg:ml-4 items-center rounded-[6px] bg-white max-md:w-[280px] w-[240px] h-[45px] text-orange-500 '>Sign In!</button>

      <div className='max-md:hidden mt-40 w-[98%] h-[265px] rounded-[6px] bg-gradient-to-b from-orange-600 to-orange-400 flex justify-around gap-[15px] items-center'>

        <img className='w-[26px] h-[26px] bg-gradient-to-r from-[#ffff] to-[#ffff] text-[#333333] rounded-xl ' src="/public/flechaizquierda.png" alt="" />

        <img className='w-[263px] h-[291px] max-lg:w-[230px] ' src="/public/imagen1.png" alt="" />

        <img className='h-[300px] pb-[35px] rounded-[6px] max-lg:w-[170px]'  src="/public/imagen2.png" alt="imagen 2" />


        <article className='flex flex-col w-[40%] gap-2'>

          <h4 className='text-[#fff] leading-95 font-medium text-[24px] font-button'>Shonen</h4>

          <p className='font-button w-[95%] text-[14px] leading-95  text-[#fff]'><samp className=''> Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</samp></p>

        </article>

        <img className='w-[26px] h-[26px] bg-gradient-to-r from-[#ffff] to-[#ffff] text-[#333333] rounded-xl ' src="/public/flechaderecha.png" alt="" />
      </div>
    </main>
    <footer className='flex flex-col  lg:flex-col  h-[15vh] bg-white lg:mt-60 justify-center items-center gap-2 '>
      <div>
        <img className='max-lg:hidden w-[1440px] h-[337px] shrink-0 rounded-b-[40%]' src="/public/imagenfooter.png" alt="footer" />
      </div>
      <div  className='flex flex-col md:flex-row md:justify-around md:w-[80%] lg:w-full lg:justify-around h-[15vh] bg-white mt-10 justify-center items-center gap-2 '>
        <div className='flex gap-2  lg:w-50 lg:gap-20'>
          <p>Home</p>
          <p>Mangas</p>
        </div>
        <div>
          <img src="/public/LogoDos.png" alt="logodos" />
        </div>
        <div>
          <img src="/public/frame.png" alt="frame" />
        </div>
      </div>
      
    </footer>
  </div>
  )
}

export default App
