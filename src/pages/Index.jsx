import Hero from "../components/Hero"
import Carousel from "../components/Carousel"

export default function Index() {
  return (
    <main  className='w-full lg:h-[100vh] flex flex-col align-center ontent-center justify-center'>    
      <Hero/>
      <Carousel/>
    </main>
  )
}
