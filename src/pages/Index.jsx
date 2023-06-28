import Hero from "../components/Hero"
import Carousel from "../components/Carousel"

export default function index() {
  return (
    <main  className='flex h-[90vh] md:ml-6 lg:mt-20 lg:ml-14 flex-col max-md:justify-center  '>
     
      <Hero/>
      <Carousel/>
    </main>
  )
}
