import Arrow from "./Arrow"

export default function Carousel() {
  
  let icon_left = "M11.25 91-3 3m0 013 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  let icon_right = "M12.75 1513-3m0 01-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  
  return (
    <div className='max-md:hidden md:mt-52 lg:mt-32 w-[98%] h-[245px] rounded-[6px] bg-gradient-to-b from-orange-600 to-orange-400 flex justify-around gap-[15px] items-center'>

      <Arrow icon={icon_left} />
      <img className='w-[263px] h-[291px] max-lg:w-[230px] ' src="/public/imagen1.png" alt="" />

      <img className='h-[300px] pb-[35px] rounded-[6px] max-lg:w-[170px]'  src="/public/imagen2.png" alt="imagen 2" />


      <article className='flex flex-col w-[40%] gap-2'>

        <h4 className='text-[#fff] leading-95 font-medium text-[24px] font-button'>Shonen</h4>

        <p className='font-button w-[95%] text-[12px] leading-95  text-[#fff]'><samp className=''> Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</samp></p>

      </article>
      <Arrow icon={icon_right}/>
    </div>
    )
}
