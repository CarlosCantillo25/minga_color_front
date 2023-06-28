import Button from "./Button"

export default function Hero() {
  return (
    <div className="flex flex-col md:mt-32  lg:mt-0 max-md:items-center lg:gap-2 gap-4">
        <h1 className='px-5 text-white max-md:text-center text-[35px] lg:text-[48.8px] font-bold leading-[95.187%] '>For the love of manga</h1>
        <p className='text-white md:ml-5 lg:ml-1 lg:p-5 max-md:text-center text-xl leading-[95.187%]'>Explore our varieties</p>
        <p className='max-md:hidden text-white ml-5'>#MingaLove❤</p>
        <Button title='Sign In '/>
    </div>
  )
}
