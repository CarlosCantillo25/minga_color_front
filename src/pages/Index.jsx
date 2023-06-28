import Hero from "../components/Hero"
import Carousel from "../components/Carousel"

export default function index() {
  return (
    <main  className='flex h-[70vh] md:h-[74vh] md:ml-6 lg:mt-10 lg:ml-0 flex-col max-md:justify-center  lg:w-[90vw]'>
     
      <Hero/>
      <Carousel/>
    </main>
  )
}
