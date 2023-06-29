import { useState, useEffect } from "react"
import Arrow from "./Arrow"
import axios from "axios"

export default function Carousel() {
  const [categories,setCategories] = useState([])
    useEffect(
        ()=> {
          axios('http://localhost:8080/api/categories')
            .then(res=>setCategories(res.data.response))
            .catch(err=>console.log(err))
        },
        []
    )
    let [counter,setCounter] = useState(0)
    let next = ()=> (counter!==categories.length-1) ? setCounter(counter+1) : setCounter(0)
    let prev = ()=> (counter!==0) ? setCounter(counter-1) : setCounter(categories.length-1)

  let icon_left = "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  let icon_right = "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  
  return (
    <div className='flex items-center justify-evenly rounded-lg  md:mt-28 mt-10 lg:mt-52 hidden ml-[-2] md:flex md:h-56 md:w-[99%] bg-gradient-to-b from-orange-600 to-orange-400  lg:justify-around gap-[15px] lg:gap-24 '>

      <button><Arrow icon={icon_left} onClick={prev}/></button>
         
      <img className='h-56 md:w-40 lg:h-64 self-end ' src={categories[counter]?.character_photo} alt="" />

      <img className='object-cover w-40 md:mx-0 h-56 mx-10 mb-8 self-end rounded-[6px] '  src={categories[counter]?.cover_photo} alt="imagen 2" />


      <article className='text-l p-2 md:p-0 text-white sm:w-10/12 xl:w-80 xl:px-10'>

        <h4 className='text-[#fff] text-2xl'>{categories[counter]?.name}</h4>

        <p className='text-xs xl:text-sm lg:w-40 md:w-40 text-[#fff]'><samp className=''> {categories[counter]?.description}</samp></p>

      </article>
      <button><Arrow icon={icon_right} onClick={next}/></button>
    </div>
    )
}

