
export default function Button({title,href}) {

  function redirect(){
    console.log(href)
  }


  return (
    <button onClick={redirect} className='flex justify-center md:ml-6 lg:ml-4 items-center rounded-[6px] bg-white max-md:w-[280px] w-[240px] h-[45px] text-orange-500 '>{title}</button>

  )
}
