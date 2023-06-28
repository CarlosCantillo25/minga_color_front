

export default function Footer() {
  return (
    <footer className=' bg-white flex flex-col h-0 mt-40 w-full justify-between items-center '>
    <div>
      <img className=' hidden md:flex w-full h-[60]   rounded-[0px_0px_50%_50%]' src="/public/imagenfooter.png" alt="footer" />
    </div>
    <div  className='flex flex-col md:flex-row md:justify-around md:w-[80%] lg:w-full lg:justify-around h-[15vh] mt-10 justify-center items-center gap-2 '>
      <div className='flex gap-2 text-black lg:w-50 lg:gap-20'>
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
  )
}
