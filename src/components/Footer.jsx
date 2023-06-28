

export default function Footer() {
  return (
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
  )
}
